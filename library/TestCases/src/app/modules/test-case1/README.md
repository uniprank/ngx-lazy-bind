You can find the complete test case at GitHub. [Test Case 1](https://github.com/uniprank/ngx-scrollspy/tree/master/library/TestCases/src/app/modules/test-case1)

## TestCase1Module

```js
@NgModule({
    declarations: [TestCase1Component],
    imports: [CommonModule, LazyBindModule.forRoot(), TestExampleModule, TestExample2Module]
})
export class TestCase1Module {}
```

## TestExampleModule

```js
@NgModule({
    declarations: [TestExampleComponent],
    imports: [CommonModule],
    entryComponents: [TestExampleComponent]
})
export class TestExampleModule {
    constructor(private _componentDictionaryService: ComponentDictionaryService) {
        _componentDictionaryService.add('TEC', TestExampleComponent);
    }
}
```

### TestExampleComponent

[See Test Example Component](https://github.com/uniprank/ngx-lazy-bind/blob/master/library/TestCases/src/app/modules/test-case1/components/test-example/test-example.component.ts)

### TestExampleComponent HTML

[See Test Example HTML](https://github.com/uniprank/ngx-lazy-bind/blob/master/library/TestCases/src/app/modules/test-case1/components/test-example/test-example.component.html)

## TestExample2Module

```js
@NgModule({
    declarations: [TestExample2Component],
    imports: [CommonModule],
    entryComponents: [TestExample2Component]
})
export class TestExample2Module {
    constructor(private _componentDictionaryService: ComponentDictionaryService) {
        _componentDictionaryService.add('TEC2', TestExample2Component);
    }
}
```

### TestExample2Component

[See Test Example 2 Component](https://github.com/uniprank/ngx-lazy-bind/blob/master/library/TestCases/src/app/modules/test-case1/components/test-example2/test-example2.component.ts)

### TestExample2Component HTML

[See Test Example 2 HTML](https://github.com/uniprank/ngx-lazy-bind/blob/master/library/TestCases/src/app/modules/test-case1/components/test-example2/test-example2.component.html)

## HTML Template

```html
<section>
    <h3>Lazy Bind</h3>
    <div class="boxes">
        <ng-container *ngFor="let box of boxes">
            <ng-container *lazyBind="box.type; data: box.data"></ng-container>
        </ng-container>
    </div>
    <!-- The first bind is the Component Name (TEC or TEC2), the second bind is the data to be use (object, string,  ...) -->
    <ng-container *lazyBind="'TEC'; data: {}"></ng-container>
    <ng-container *lazyBind="'TEC2'; data: { $data: {}, $specialData: {} }"></ng-container>
</section>
```
