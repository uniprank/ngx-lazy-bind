import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestExample2Component } from './test-example2.component';

describe('TestCase3Component', () => {
    let component: TestExample2Component;
    let fixture: ComponentFixture<TestExample2Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TestExample2Component]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestExample2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
