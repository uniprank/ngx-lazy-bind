import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector } from '@angular/core';

import { GenericComponentFactory } from '../../classes/generic-component-factory/generic-component-factory';

import { ComponentDictionaryService } from './component-dictionary.service';

@Injectable({
    providedIn: 'root'
})
export class ComponentService extends GenericComponentFactory {
    constructor(
        protected _componentFactoryResolver: ComponentFactoryResolver,
        protected _appRef: ApplicationRef,
        protected _injector: Injector,
        protected _componentDictionaryService: ComponentDictionaryService
    ) {
        super(_componentFactoryResolver, _appRef, _injector, _componentDictionaryService);
    }

    public has(key: string): boolean {
        return this.keyExists(key);
    }
}
