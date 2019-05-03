import { TestBed, inject } from '@angular/core/testing';

import { ComponentDictionaryService } from './component-dictionary.service';

describe('ComponentDictionaryService', () => {
    let _dictionary;

    beforeEach(() => TestBed.configureTestingModule({}));

    beforeEach(() => {
        _dictionary = TestBed.get(ComponentDictionaryService);
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
});
