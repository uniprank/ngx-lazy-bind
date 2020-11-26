import { Compiler, Injectable, Injector, Type } from '@angular/core';

@Injectable()
export class LazyModuleService {
  private _modules: {
    [moduleName: string]: () => Promise<Type<any>>;
  } = {};
  private _loaded: Array<string> = [];

  constructor(private _compiler: Compiler, private _injector: Injector) {}

  public set(moduleName: string, load: () => Promise<Type<any>>) {
    if (!this.has(moduleName)) {
      this._modules[moduleName] = load;
    }
  }

  public has(moduleName: string): boolean {
    return !!this._modules[moduleName];
  }

  public async load(moduleName: string): Promise<void> {
    if (this.has(moduleName)) {
      if (this._loaded.indexOf(moduleName) === -1) {
        this._loaded.push(moduleName);
        const _module = await this._modules[moduleName]();
        const _factory = this._compiler.compileModuleSync(_module);
        _factory.create(this._injector);
      }
      return;
    }
    throw new Error(`LazyLoadService: No Lazy Module found: ${moduleName}`);
  }
}
