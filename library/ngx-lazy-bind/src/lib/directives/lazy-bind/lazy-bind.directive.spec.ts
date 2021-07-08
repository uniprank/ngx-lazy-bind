import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, NO_ERRORS_SCHEMA, Input } from '@angular/core';

// Do not import any other than you test. For others, mock it
import { LazyBindDirective } from './lazy-bind.directive';
import { ComponentService } from '../../services/component/component.service';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { LazyModuleService } from '../../services/lazy-module/lazy-module.service';
import { ComponentDictionaryService } from '../../services/component/component-dictionary.service';

@Component({
  template: ` <div>Hello world! {{ data.test }}</div> `
})
class TestRenderComponent {
  @Input() data: any;
}

@Component({
  template: ` <ng-container *lazyBind="type; data: { test: 'test' }"></ng-container> `
})
// tslint:disable-next-line: component-class-suffix
class TestComponent2 {
  type = 'TestRenderComponent';
}

describe('LazyBindDirective', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LazyBindDirective, TestComponent2, TestRenderComponent],
      providers: [ComponentService, LazyModuleService, ComponentDictionaryService]
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
    const _service = TestBed.inject(ComponentService);
    _service.add('TestRenderComponent', TestRenderComponent);
  });

  it('should create component only with type and data', async (done) => {
    const _fixture = TestBed.createComponent(TestComponent2);
    const _component = _fixture.componentInstance;
    expect(_component).toBeTruthy();
    _fixture.detectChanges();
    setTimeout(() => {
      const compiled = _fixture.debugElement.nativeElement;
      const div: HTMLDivElement = compiled.querySelector('div');
      expect(div.innerHTML).toContain('Hello world! test');
      done();
    }, 500);
  });
});
