import { NgModule, Provider, ModuleWithProviders } from '@angular/core';

import { LazyBindDirective } from './directives/lazy-bind/lazy-bind.directive';
import { ComponentService } from './services/component/component.service';
import { ComponentDictionaryService } from './services/component/component-dictionary.service';

const SHARED_MODULE_COMPONENTS = [];
const SHARED_MODULE_PIPES = [];
const SHARED_MODULE_DIRECTIVES = [LazyBindDirective];
const SHARED_MODULE_PROVIDERS: Provider[] = [ComponentService, ComponentDictionaryService];
const DECLARATIONS = [];

@NgModule({
    imports: [],
    declarations: [...DECLARATIONS, ...SHARED_MODULE_COMPONENTS, ...SHARED_MODULE_PIPES, ...SHARED_MODULE_DIRECTIVES],
    providers: [],
    exports: [...DECLARATIONS, ...SHARED_MODULE_COMPONENTS, ...SHARED_MODULE_PIPES, ...SHARED_MODULE_DIRECTIVES]
})
export class LazyBindModule {
    static forRoot(): ModuleWithProviders<LazyBindModule> {
        return {
            ngModule: LazyBindModule,
            providers: [...SHARED_MODULE_PROVIDERS]
        };
    }
}
