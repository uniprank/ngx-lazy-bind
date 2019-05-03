import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestExampleComponent } from './test-example.component';

describe('TestCase3Component', () => {
    let component: TestExampleComponent;
    let fixture: ComponentFixture<TestExampleComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TestExampleComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestExampleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
