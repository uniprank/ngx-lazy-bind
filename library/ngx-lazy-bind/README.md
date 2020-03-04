[![travis build](https://img.shields.io/travis/uniprank/ngx-lazy-bind?label=Travis%3Abuild&style=flat-square)](https://travis-ci.org/uniprank/ngx-lazy-bind)

You can use this angular service to spy scroll events from `window` or any other scrollable element.

This library implements two services. The `ComponentDictionaryService` can be used to add an entryComponent to the dictionary. You can also check if there exists a component with the given key. You have also the possibilty to override a component. For more information take a look directly to the [service]().

The second service `ComponentService` is used from the directive to create and remove dynamic components.

But the realy importend thing is the structural directive `*lazyBind`. With this directive you can bind the key, which you are used to register you component at the `ComponentDictionaryService`. And the second bind is a data bind, which is transfered to you component. Your dynamic component must only detect `data` or `data` and `specialData` changes.

See Examples here [Example](https://uniprank.github.io/ngx-lazy-bind/test-cases)

## Installation

First you need to install the npm module:

```sh
npm install @uniprank/ngx-lazy-bind --save
```

If you use SystemJS to load your files, you might have to update your config with this if you don't use `defaultJSExtensions: true`:

```js
System.config({
  packages: {
    '@uniprank/ngx-lazy-bind': { defaultExtension: 'js' }
  }
});
```

Finally, you can use ngx-lazy-bind in your Angular project (NOT AngularJS).
It is recommended to instantiate `ComponentService` and `ComponentDictionaryService` in the bootstrap of your application and to never add it to the "providers" property of your components, this way you will keep it as a singleton.
If you add it to the "providers" property of a component it will instantiate a new instance of the service that won't be initialized.

```js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LazyBindModule } from '@uniprank/ngx-lazy-bind';

@NgModule({
  imports: [BrowserModule, LazyBindModule.forRoot()],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

## Using

#### Lazy Bind Directive

Use `*lazyBind` to render your dynamic EntryComponent.

```js
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyBindModule, ComponentDictionaryService } from 'ngx-lazy-bind';

import { TestExampleComponent } from './test-example.component';

@NgModule({
    declarations: [TestExampleComponent],
    imports: [CommonModule, LazyBindModule],
    entryComponents: [TestExampleComponent]
})
export class TestExampleModule {
    constructor(private _componentDictionaryService: ComponentDictionaryService) {
        _componentDictionaryService.add('TEC', TestExampleComponent);
    }
}
```

```js
import { NgModule, Component, Injectable, AfterViewInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LazyBindModule } from '@uniprank/ngx-lazy-bind';

@Injectable()
@Component({
	selector: 'app',
	template: `<ng-container *lazyBind="'TEC'; data: {}"></ng-container>`
})
export class AppComponent {
	constructor() {}
}

@NgModule({
  imports: [
    BrowserModule,
    LazyBindModule.forRoot(),
    /* don't forget to include the Module-With-EntryComponent, it works also with lazy load modules */
    TestExampleModule
  ],
  declarations: [
  	AppComponent
  ],
  bootstrap: [ AppComponent ]
})
```

# TODO:

- Finish unit tests

## License

[MIT](LICENSE)
