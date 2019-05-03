import { TestBed, inject } from '@angular/core/testing';
import { ComponentFactoryResolver, ApplicationRef, Injector, Component } from '@angular/core';

import { ComponentDictionaryService } from '../../services/component/component-dictionary.service';

import { GenericComponentFactory } from './generic-component-factory';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

@Component({
    template: `
        <p>TestComponent</p>
    `
})
class TestComponent {
    constructor() {}
}

describe('GenericComponentFactory', () => {
    let componentFactory;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent],
            providers: []
        });

        TestBed.overrideModule(BrowserDynamicTestingModule, {
            set: {
                entryComponents: [TestComponent]
            }
        });
    });

    beforeEach(inject(
        [ComponentFactoryResolver, ApplicationRef, Injector, ComponentDictionaryService],
        (
            _componentFactoryResolver: ComponentFactoryResolver,
            _applicationRef: ApplicationRef,
            _injector: Injector,
            _componentDictionaryService: ComponentDictionaryService
        ) => {
            componentFactory = new GenericComponentFactory(
                _componentFactoryResolver,
                _applicationRef,
                _injector,
                _componentDictionaryService
            );
        }
    ));

    it('should be created', () => {
        expect(componentFactory).toBeTruthy();
    });

    it('should add a test component and create an instance of an object with an ID `Test123`', () => {
        componentFactory.add('TestComponent', TestComponent);
        const _obj = componentFactory.createComponent('TestComponent', { test: 'test' }, 'Test123');
        expect(_obj.id).toBe('Test123');
    });

    it('should add only 1 component once', () => {
        componentFactory.add('TestComponent', TestComponent);
        expect(() => componentFactory.add('TestComponent', TestComponent)).toThrowError();
    });

    it('should create 2 components with different uniqueID', () => {
        componentFactory.add('TestComponent', TestComponent);
        const comp1 = componentFactory.createComponent('TestComponent', TestComponent, 'ABC');
        const comp2 = componentFactory.createComponent('TestComponent', TestComponent, 'ABC');
        expect(comp1.id !== comp2.id).toBeTruthy();
    });

    it('should get a generated component', () => {
        componentFactory.add('TestComponent', TestComponent);
        const _obj = componentFactory.createComponent('TestComponent', { test: 'test' }, 'Test123');
        expect(componentFactory.get(_obj.id)).toBeDefined();
    });

    it('should remove a created instance of a component', () => {
        componentFactory.add('TestComponent', TestComponent);
        const _obj = componentFactory.createComponent('TestComponent', { test: 'test' }, 'Test123');
        expect(_obj.id).toBe('Test123');
        componentFactory.remove('Test123');
        expect(() => componentFactory.get('Test123')).toThrowError();
    });
});
