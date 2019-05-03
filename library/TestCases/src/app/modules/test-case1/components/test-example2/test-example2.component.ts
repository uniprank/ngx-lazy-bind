import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ComponentInterface } from 'ngx-lazy-bind';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'uni-test-example2',
    templateUrl: './test-example2.component.html',
    styleUrls: ['./test-example2.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestExample2Component implements ComponentInterface<{ test: string; test2: string }, string> {
    @Input()
    set data(value: { test: string; test2: string }) {
        this._$data.next(value);
    }
    get data(): { test: string; test2: string } {
        return this._$data.getValue();
    }

    @Input()
    set specialData(value: string) {
        this._$specialData.next(value);
    }
    get specialData(): string {
        return this._$specialData.getValue();
    }

    get test$(): Observable<string> {
        return this._$data
            .asObservable()
            .pipe(map((data: { test: string; test2: string }) => (data && data.test !== '' ? data.test : undefined)));
    }

    get test2$(): Observable<string> {
        return this._$data
            .asObservable()
            .pipe(map((data: { test: string; test2: string }) => (data && data.test2 !== '' ? data.test2 : undefined)));
    }

    get special$(): Observable<string> {
        return this._$specialData.asObservable().pipe(map((data: string) => (data !== '' ? data : undefined)));
    }

    private _$data: BehaviorSubject<{ test: string; test2: string }> = new BehaviorSubject(null);
    private _$specialData: BehaviorSubject<string> = new BehaviorSubject(null);
}
