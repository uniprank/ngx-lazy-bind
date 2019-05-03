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
            if (JSON.stringify(changes.data.currentValue) != JSON.stringify(changes.data.previousValue)) {
                this._createNewComponent();
                this._viewContainerRef.clear();
                setTimeout(() => this._appendComponent());
            }
        }
    }

    ngOnDestroy() {
        this._componentService.remove(this._uniqueID);
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
