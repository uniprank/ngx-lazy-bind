import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-test-case1',
    templateUrl: './test-case1.component.html',
    styleUrls: ['./test-case1.component.scss']
})
export class TestCase1Component implements OnInit {
    public markdown = require('raw-loader!./README.md');

    @ViewChild('headline', { read: ElementRef, static: true }) headline: ElementRef;
    @ViewChild('text', { read: ElementRef, static: true }) text: ElementRef;
    @ViewChild('count', { read: ElementRef, static: true }) count: ElementRef;
    @ViewChild('special', { read: ElementRef, static: true }) special: ElementRef;

    public boxes: any = [];
    private _counter = 0;
    constructor(private _host: ElementRef) {}

    ngOnInit() {}

    public createBox() {
        this.boxes.push({
            type: 'TEC',
            data: {
                headline: this.headline.nativeElement.value,
                count: this.count.nativeElement.value || ++this._counter
            }
        });
    }

    public createSpecialBox() {
        this.boxes.push({
            type: 'TEC2',
            data: {
                $data: {
                    test: this.headline.nativeElement.value,
                    test2: this.text.nativeElement.value
                },
                $specialData: this.special.nativeElement.value
            }
        });
    }
}
