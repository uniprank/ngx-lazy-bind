import { Injectable, Type } from '@angular/core';
import { LazyModuleService } from '../lazy-module/lazy-module.service';

@Injectable()
export class ComponentDictionaryService {
  private _dictionary: { [id: string]: { component: Type<any>; moduleName?: string } } = {};

  constructor(private _lazyModuleService: LazyModuleService) {}

  add(name: string, component: any, moduleName?: string): void {
    this.componentExistsCheck(name);
    this._dictionary[name] = { component, moduleName };
  }

  componentExistsCheck(name: string) {
    if (this._dictionary[name]) {
      throw new Error(`Add of component [${name}] failed because it allready exists.`);
    }
  }

  get(name: string): Type<any> {
    this.componentNotExistsCheck(name);
    return this._dictionary[name].component;
  }

  async getWithModule(name: string): Promise<Type<any>> {
    this.componentNotExistsCheck(name);
    if (this._dictionary[name].moduleName != null) {
      await this._lazyModuleService.load(this._dictionary[name].moduleName);
    } else {
      throw new Error(`Could not find module name for component [${name}].`);
    }
    return this._dictionary[name].component;
  }

  componentNotExistsCheck(name: string) {
    if (this._dictionary[name] == null) {
      throw new Error(`Add of component [${name}] failed because it does not exists.`);
    }
  }

  override(name: string, component: any, moduleName?: string): void {
    this._dictionary[name] = { component, moduleName };
  }
}
