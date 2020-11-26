import { TestBed } from '@angular/core/testing';
import { LazyModuleService } from '../lazy-module/lazy-module.service';
import { ComponentDictionaryService } from './component-dictionary.service';

import { ComponentService } from './component.service';

describe('ComponentService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [LazyModuleService, ComponentDictionaryService, ComponentService]
    })
  );

  it('should be created', () => {
    const service: ComponentService = TestBed.inject(ComponentService);
    expect(service).toBeTruthy();
  });
});
