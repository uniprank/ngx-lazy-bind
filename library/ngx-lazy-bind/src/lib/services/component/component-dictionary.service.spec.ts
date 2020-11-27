import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { LazyModuleService } from '../lazy-module/lazy-module.service';
import { ComponentDictionaryService } from './component-dictionary.service';

@NgModule()
class TestModule {
  constructor() {}
}

describe('ComponentDictionaryService', () => {
  let _dictionary: ComponentDictionaryService, _moduleService: LazyModuleService;

  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [LazyModuleService, ComponentDictionaryService]
    })
  );

  beforeEach(() => {
    _dictionary = TestBed.inject(ComponentDictionaryService);
    _moduleService = TestBed.inject(LazyModuleService);
  });

  it('should be created', () => {
    expect(_dictionary).toBeTruthy();
  });

  it('should add an object to the dictionary', () => {
    _dictionary.add('Object', { test: 'test' });
    expect(() => _dictionary.componentExistsCheck('Object')).toThrowError();
  });

  it('should add only one object with the same name', () => {
    _dictionary.add('Object', { test: 'test' });
    expect(() => _dictionary.add('Object', { test2: 'test2' })).toThrowError();
  });

  it('should get an object from the dictionary', () => {
    _dictionary.add('Object', { test: 'test' });
    expect(JSON.stringify(_dictionary.get('Object'))).toBe(JSON.stringify({ test: 'test' }));
  });

  it('should override an existing object', () => {
    _dictionary.add('Object', { test: 'test' });
    _dictionary.override('Object', { test2: 'test2' });
    expect(JSON.stringify(_dictionary.get('Object'))).toBe(JSON.stringify({ test2: 'test2' }));
  });

  it('should load module before component', async () => {
    _moduleService.set('Module1', () => Promise.resolve(TestModule));
    expect(_moduleService.has('Module1')).toBeTruthy();
    _dictionary.add('Object', { test: 'test' }, 'Module1');
    expect(JSON.stringify(await _dictionary.getAsync('Object'))).toBe(JSON.stringify({ test: 'test' }));
  });

  it('should not load component because module name is missing', async () => {
    _moduleService.set('Module1', () => Promise.resolve(TestModule));
    expect(_moduleService.has('Module1')).toBeTruthy();
    _dictionary.add('Object', { test: 'test' });
    _dictionary
      .getAsync('Object')
      .then(() => expect(false).toBeTruthy())
      .catch(() => expect(true).toBeTruthy());
  });
});
