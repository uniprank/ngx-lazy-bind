import { TestBed } from '@angular/core/testing';

import { ComponentService } from './component.service';

describe('ComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComponentService = TestBed.inject(ComponentService);
    expect(service).toBeTruthy();
  });
});
