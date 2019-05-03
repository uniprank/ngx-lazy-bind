import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ComponentDictionaryService {
    private _dictionary: { [id: string]: any } = {};

    constructor() {}

    add(name: string, component: any): void {
        this.componentExistsCheck(name);
        this._dictionary[name] = component;
    }

    componentExistsCheck(name: string) {
        if (this._dictionary[name]) {
            throw new Error(`Add of component [${name}] failed because it allready exists.`);
        }
    }

    get(name: string): any {
        this.componentNotExistsCheck(name);
        return this._dictionary[name];
    }

    componentNotExistsCheck(name: string) {
        if (this._dictionary[name] == null) {
            throw new Error(`Add of component [${name}] failed because it does not exists.`);
        }
    }

    override(name: string, component: any): void {
        this._dictionary[name] = component;
    }
}
