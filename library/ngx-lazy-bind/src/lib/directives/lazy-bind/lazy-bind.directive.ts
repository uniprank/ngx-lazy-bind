import { Directive, Input, OnInit, OnChanges, SimpleChanges, ViewContainerRef, OnDestroy, TemplateRef } from '@angular/core';

import { ComponentService } from '../../services/component/component.service';

@Directive({
    selector: '[lazyBind]'
})
export class LazyBindDirective implements OnInit, OnChanges, OnDestroy {
    @Input('lazyBind') type: string;
    @Input('lazyBindData') data: any;

    private _uniqueID: string;

    constructor(private _componentService: ComponentService, private _viewContainerRef: ViewContainerRef) {}

    ngOnInit(): void {
        this._createNewComponent();
        this._appendComponent();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.type.currentValue != null && changes.data.currentValue != null) {
            if (this._jsonStringifyCircular(changes.data.currentValue) != this._jsonStringifyCircular(changes.data.previousValue)) {
                this._createNewComponent();
                this._viewContainerRef.clear();
                setTimeout(() => this._appendComponent());
            }
        }
    }

    ngOnDestroy() {
        this._componentService.remove(this._uniqueID);
    }

    private _jsonStringifyCircular(o: any): string {
        // See discussion: https://stackoverflow.com/questions/11616630/json-stringify-avoid-typeerror-converting-circular-structure-to-json
        // Note: cache should not be re-used by repeated calls to JSON.stringify.
        var cache = [];
        const _output = JSON.stringify(o, function(key, value) {
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

    private _appendComponent() {
        const _element = this._componentService.get(this._uniqueID);
        this._viewContainerRef.insert(_element._ref.hostView);
    }

    private _createNewComponent() {
        const _object = this._componentService.createComponentRef(this.type, this.data);
        this._uniqueID = _object.id;
    }
}
