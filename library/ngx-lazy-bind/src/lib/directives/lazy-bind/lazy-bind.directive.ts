import { Directive, Input, OnInit, OnChanges, SimpleChanges, ViewContainerRef, OnDestroy, TemplateRef } from '@angular/core';

import { ComponentService } from '../../services/component/component.service';

@Directive({
    selector: '[lazyBind]'
})
export class LazyBindDirective implements OnInit, OnChanges, OnDestroy {
    @Input('lazyBind')
    set type(value: string) {
        this._type = value;
        this._resetComponent();
    }
    get type(): string {
        return this._type;
    }

    @Input('lazyBindData')
    set data(value: any) {
        this._data = value;
        this._resetComponent();
    }
    get data(): any {
        return this._data;
    }

    private _uniqueID: string;
    private _type: string;
    private _data: string;

    constructor(private _componentService: ComponentService, private _viewContainerRef: ViewContainerRef) {}

    ngOnInit(): void {
        this._createNewComponent();
        this._appendComponent();
    }

    ngOnDestroy() {
        this._componentService.remove(this._uniqueID);
    }

    ngOnChanges() {}

    private _jsonStringifyCircular(o: any): string {
        // See discussion: https://stackoverflow.com/questions/11616630/json-stringify-avoid-typeerror-converting-circular-structure-to-json
        // Note: cache should not be re-used by repeated calls to JSON.stringify.
        let cache = [];
        const _output = JSON.stringify(o, (key, value) => {
            if (typeof value === 'object' && value !== null) {
                if (cache.indexOf(value) !== -1) {
                    // Duplicate reference found
                    try {
                        // If this value does not reference a parent it can be deduped
                        return JSON.parse(JSON.stringify(value));
                    } catch (error) {
                        // discard key if value cannot be deduped
                        return;
                    }
                }
                // Store value in our collection
                cache.push(value);
            }
            return value;
        });
        cache = null; // Enable garbage collection
        return _output;
    }

    private _resetComponent() {
        if (this.data != null && this.type != null) {
            this._createNewComponent();
            this._viewContainerRef.clear();
            setTimeout(() => this._appendComponent());
        }
    }

    private _appendComponent() {
        const _element = this._componentService.get(this._uniqueID);
        this._viewContainerRef.insert(_element._ref.hostView);
    }

    private _createNewComponent() {
        const _object = this._componentService.createComponentRef(this.type, this.data);
        this._uniqueID = _object.id;
    }
}
