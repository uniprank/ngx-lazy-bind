/*
 * Public API Surface of ngx-lazy-bind
 */
// interfaces
export { NativeComponentRefInterface } from './lib/interfaces/native-component-ref.interface';
export { ComponentInterface } from './lib/interfaces/component.interface';

// classes
export { GenericComponentFactory } from './lib/classes/generic-component-factory/generic-component-factory';

// services
export { ComponentDictionaryService } from './lib/services/component/component-dictionary.service';
export { ComponentService } from './lib/services/component/component.service';
export { LazyModuleService } from './lib/services/lazy-module/lazy-module.service';

export { LazyBindModule } from './lib/lazy-bind.module';
