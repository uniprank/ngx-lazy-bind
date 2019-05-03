import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyBindModule, ComponentDictionaryService } from 'ngx-lazy-bind';

import { TestExample2Component } from './test-example2.component';

@NgModule({
    declarations: [TestExample2Component],
    imports: [CommonModule, LazyBindModule],
    entryComponents: [TestExample2Component]
})
export class TestExample2Module {
    constructor(private _componentDictionaryService: ComponentDictionaryService) {
        _componentDictionaryService.add('TEC2', TestExample2Component);
    }
}
