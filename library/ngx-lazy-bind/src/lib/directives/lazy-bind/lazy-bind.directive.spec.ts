import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, NO_ERRORS_SCHEMA, Input } from '@angular/core';

// Do not import any other than you test. For others, mock it
import { LazyBindDirective } from './lazy-bind.directive';
import { ComponentService } from '../../services/component/component.service';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

@Component({
    template: `
        <div>Hello world! {{ data.test }}</div>
    `
})
class TestRenderComponent {
    @Input() data: any;
}

@Component({
    template: `
        <ng-container *lazyBind="let _bind; type: type; data: { test: 'test' }"></ng-container>
    `
})
class TestComponent2 {
    type = 'TestRenderComponent';
}

describe('LazyBindDirective', () => {
    let fixtureRenderer: ComponentFixture<TestRenderComponent>;
    let componentRenderer: TestRenderComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LazyBindDirective, TestComponent2, TestRenderComponent],
            providers: [ComponentService]
            // schemas: [NO_ERRORS_SCHEMA]
        });

        TestBed.overrideModule(BrowserDynamicTestingModule, {
            set: {
                entryComponents: [TestRenderComponent]
            }
        });

        TestBed.compileComponents();
    }));

    beforeEach(() => {
        const _service = TestBed.get(ComponentService);
        _service.add('TestRenderComponent', TestRenderComponent);
    });

    it('should create component only with type and data', async(() => {
        const _fixture = TestBed.createComponent(TestComponent2);
        const _component = _fixture.componentInstance;
        expect(_component).toBeTruthy();
        _fixture.detectChanges();
        const compiled = _fixture.debugElement.nativeElement;
        const div = compiled.querySelector('div');
        expect(div.textContent).toContain('Hello world! test');
    }));
});
