import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyBindModule, ComponentDictionaryService } from 'ngx-lazy-bind';

import { TestExampleComponent } from './test-example.component';

@NgModule({
    declarations: [TestExampleComponent],
    imports: [CommonModule, LazyBindModule],
    entryComponents: [TestExampleComponent]
})
export class TestExampleModule {
    constructor(private _componentDictionaryService: ComponentDictionaryService) {
        _componentDictionaryService.add('TEC', TestExampleComponent);
    }
}
