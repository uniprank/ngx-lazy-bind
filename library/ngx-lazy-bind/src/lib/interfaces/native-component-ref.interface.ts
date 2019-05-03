import { ComponentRef } from '@angular/core';

export interface NativeComponentRefInterface<T> {
    type: string;
    nativeElement: HTMLElement;
    _ref: ComponentRef<T>;
}
