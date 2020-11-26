import { ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef, OnDestroy, Type } from '@angular/core';

import { NativeComponentRefInterface } from '../../interfaces/native-component-ref.interface';
import { ComponentDictionaryService } from '../../services/component/component-dictionary.service';

// TODO: Add Angular decorator.
export abstract class GenericComponentFactory implements OnDestroy {
  private _componentItems: {
    [id: string]: NativeComponentRefInterface<any>;
  } = {};

  constructor(
    protected _componentFactoryResolver: ComponentFactoryResolver,
    protected _appRef: ApplicationRef,
    protected _injector: Injector,
    protected _componentDictionaryService: ComponentDictionaryService
  ) {}

  ngOnDestroy() {
    for (const key in this._componentItems) {
      if (this._componentItems.hasOwnProperty(key)) {
        this.remove(key);
      }
    }
    this._componentItems = {};
  }

  public add(componentName: string, sectionComponent: any) {
    this._componentDictionaryService.add(componentName, sectionComponent);
  }

  public createComponent<T>(componentName: string, data: T, uniqueID?: string) {
    return this._create<T>(componentName, data, uniqueID || null, true);
  }

  public createComponentRef<T>(componentName: string, data: T, uniqueID?: string) {
    return this._create<T>(componentName, data, uniqueID || null, false);
  }

  private _create<T>(componentName: string, data: T, uniqueID: string, attach = false) {
    uniqueID = uniqueID || this.uniqueID();

    this._componentDictionaryService.componentNotExistsCheck(componentName);

    if (this._componentItems[uniqueID] != null) {
      return this._create<T>(componentName, data, null, attach);
    }

    const _component: T | Type<any> = this._componentDictionaryService.get(componentName);

    // Create a component reference from the component
    const componentRef = this._componentFactoryResolver.resolveComponentFactory<any>(_component as any).create(this._injector);

    // Attach component to the appRef so that it's inside the ng component tree
    if (data['$data'] != null && data['$specialData'] != null) {
      (<any>componentRef.instance).data = data['$data'];
      (<any>componentRef.instance).specialData = data['$specialData'];
    } else {
      (<any>componentRef.instance).data = data;
    }

    if (attach) {
      this._appRef.attachView(componentRef.hostView);
    }

    // Get DOM element from component
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    domElem.id = uniqueID;

    const _nativeComponentRef = {
      nativeElement: domElem,
      _ref: componentRef,
      type: componentName
    };
    this._componentItems[uniqueID] = _nativeComponentRef;

    return { id: uniqueID, template: _nativeComponentRef };
  }

  public get<T>(uniqueID: string): NativeComponentRefInterface<T> {
    if (this._componentItems[uniqueID] == null) {
      throw new Error(`There is not a component with the given id [${uniqueID}]`);
    }
    return this._componentItems[uniqueID];
  }

  public remove(id: string): void {
    const _element = this._componentItems[id];
    if (_element) {
      this._appRef.detachView(_element._ref.hostView);
      _element._ref.destroy();
      this._componentItems[id] = undefined;
    }
  }

  private uniqueID(): string {
    const _internalKey: string = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      // tslint:disable-next-line:no-bitwise
      const r = (Math.random() * 16) | 0,
        v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });

    return _internalKey;
  }

  protected keyExists(key: string): boolean {
    try {
      this._componentDictionaryService.componentExistsCheck(key);
    } catch (e) {
      return true;
    }
    return false;
  }
}
