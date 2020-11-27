import { Compiler, Injectable, Injector, Type } from '@angular/core';

@Injectable()
export class LazyModuleService {
  private _modules: {
    [moduleName: string]: { load: () => Promise<Type<any>>; componentNames: Array<string> };
  } = {};
  private _components: { [componentName: string]: string } = {};
  private _loaded: Array<string> = [];

  constructor(private _compiler: Compiler, private _injector: Injector) {}

  public set(moduleName: string, load: () => Promise<Type<any>>, componentNames?: Array<string>) {
    if (!this.has(moduleName)) {
      if (componentNames != null && this._possibilityCheck(componentNames)) {
        componentNames.forEach((componentName) => (this._components[componentName] = moduleName));
      }
      this._modules[moduleName] = { load, componentNames };
    }
  }

  public has(moduleName: string): boolean {
    return !!this._modules[moduleName];
  }

  public getModuleName(componentName: string): string {
    return this._components[componentName];
  }

  public isLoaded(moduleName: string): boolean {
    return this._loaded.indexOf(moduleName) !== -1;
  }

  public async load(moduleName: string): Promise<void> {
    if (this.has(moduleName)) {
      if (!this.isLoaded(moduleName)) {
        this._loaded.push(moduleName);
        const _module = await this._modules[moduleName].load();
        const _factory = this._compiler.compileModuleSync(_module);
        _factory.create(this._injector);
      }
      return;
    }
    throw new Error(`LazyLoadService: No Lazy Module found: ${moduleName}`);
  }

  private _possibilityCheck(componentNames: Array<string>): boolean {
    if (componentNames != null) {
      return !componentNames.some((componentName) => !!this._components[componentName]);
    }
    return true;
  }
}
