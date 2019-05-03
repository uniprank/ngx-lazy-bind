import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ComponentInterface } from 'ngx-lazy-bind';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface DummyInterface {
    headline: string;
    count: number;
}

@Component({
    selector: 'uni-test-example',
    templateUrl: './test-example.component.html',
    styleUrls: ['./test-example.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestExampleComponent implements ComponentInterface<DummyInterface> {
    @Input()
    get data(): DummyInterface {
        return this._$data.getValue();
    }
    set data(value: DummyInterface) {
        this._$data.next(value);
    }

    get headline$(): Observable<string> {
        return this._$data.asObservable().pipe(map((data: DummyInterface) => (data && data.headline !== '' ? data.headline : undefined)));
    }

    get count$(): Observable<number> {
        return this._$data.asObservable().pipe(map((data: DummyInterface) => (data && data.count != null ? data.count : undefined)));
    }

    private _$data: BehaviorSubject<DummyInterface> = new BehaviorSubject(null);
}
