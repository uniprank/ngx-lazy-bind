!function(){function t(e,n){return(t=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(e,n)}function e(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,a=o(t);if(e){var r=o(this).constructor;i=Reflect.construct(a,arguments,r)}else i=a.apply(this,arguments);return n(this,i)}}function n(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"2uiD":function(n,o,a){"use strict";a.r(o),a.d(o,"TestCase1Module",(function(){return Y}));var c,s,u,l,p,d,b,f,m,h=a("2kYt"),y=a("DgXe"),v=a("EM62"),x=((l=function(){function t(e,n,o,a){i(this,t),this._componentFactoryResolver=e,this._appRef=n,this._injector=o,this._componentDictionaryService=a,this._componentItems={}}return r(t,[{key:"ngOnDestroy",value:function(){for(var t in this._componentItems)this._componentItems.hasOwnProperty(t)&&this.remove(t);this._componentItems={}}},{key:"add",value:function(t,e){this._componentDictionaryService.add(t,e)}},{key:"createComponent",value:function(t,e,n){return this._create(t,e,n||null,!0)}},{key:"createComponentRef",value:function(t,e,n){return this._create(t,e,n||null,!1)}},{key:"_create",value:function(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(n=n||this.uniqueID(),this._componentDictionaryService.componentNotExistsCheck(t),null!=this._componentItems[n])return this._create(t,e,null,o);var i=this._componentDictionaryService.get(t),a=this._componentFactoryResolver.resolveComponentFactory(i).create(this._injector);null!=e.$data&&null!=e.$specialData?(a.instance.data=e.$data,a.instance.specialData=e.$specialData):a.instance.data=e,o&&this._appRef.attachView(a.hostView);var r=a.hostView.rootNodes[0];r.id=n;var c={nativeElement:r,_ref:a,type:t};return this._componentItems[n]=c,{id:n,template:c}}},{key:"get",value:function(t){if(null==this._componentItems[t])throw new Error("There is not a component with the given id [".concat(t,"]"));return this._componentItems[t]}},{key:"remove",value:function(t){var e=this._componentItems[t];e&&(this._appRef.detachView(e._ref.hostView),e._ref.destroy(),this._componentItems[t]=void 0)}},{key:"uniqueID",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"===t?e:3&e|8).toString(16)}))}},{key:"keyExists",value:function(t){try{this._componentDictionaryService.componentExistsCheck(t)}catch(e){return!0}return!1}}]),t}()).\u0275fac=function(t){v.Ob()},l.\u0275dir=v.yb({type:l}),l),g=((u=function(){function t(){i(this,t),this._dictionary={}}return r(t,[{key:"add",value:function(t,e){this.componentExistsCheck(t),this._dictionary[t]=e}},{key:"componentExistsCheck",value:function(t){if(this._dictionary[t])throw new Error("Add of component [".concat(t,"] failed because it allready exists."))}},{key:"get",value:function(t){return this.componentNotExistsCheck(t),this._dictionary[t]}},{key:"componentNotExistsCheck",value:function(t){if(null==this._dictionary[t])throw new Error("Add of component [".concat(t,"] failed because it does not exists."))}},{key:"override",value:function(t,e){this._dictionary[t]=e}}]),t}()).\u0275fac=function(t){return new(t||u)},u.\u0275prov=Object(v.zb)({factory:function(){return new u},token:u,providedIn:"root"}),u),_=((s=function(n){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&t(e,n)}(a,n);var o=e(a);function a(t,e,n,r){var c;return i(this,a),(c=o.call(this,t,e,n,r))._componentFactoryResolver=t,c._appRef=e,c._injector=n,c._componentDictionaryService=r,c}return r(a,[{key:"has",value:function(t){return this.keyExists(t)}}]),a}(x)).\u0275fac=function(t){return new(t||s)(v.Lb(v.j),v.Lb(v.g),v.Lb(v.r),v.Lb(g))},s.\u0275prov=Object(v.zb)({factory:function(){return new s(Object(v.Lb)(v.j),Object(v.Lb)(v.g),Object(v.Lb)(v.o),Object(v.Lb)(g))},token:s,providedIn:"root"}),s),C=((c=function(){function t(e,n){i(this,t),this._componentService=e,this._viewContainerRef=n}return r(t,[{key:"ngOnInit",value:function(){this._createNewComponent(),this._appendComponent()}},{key:"ngOnDestroy",value:function(){this._componentService.remove(this._uniqueID)}},{key:"ngOnChanges",value:function(){}},{key:"_jsonStringifyCircular",value:function(t){var e=[],n=JSON.stringify(t,(function(t,n){if("object"==typeof n&&null!==n){if(-1!==e.indexOf(n))try{return JSON.parse(JSON.stringify(n))}catch(o){return}e.push(n)}return n}));return e=null,n}},{key:"_resetComponent",value:function(){var t=this;null!=this.data&&null!=this.type&&(this._createNewComponent(),this._viewContainerRef.clear(),setTimeout((function(){return t._appendComponent()})))}},{key:"_appendComponent",value:function(){var t=this._componentService.get(this._uniqueID);this._viewContainerRef.insert(t._ref.hostView)}},{key:"_createNewComponent",value:function(){var t=this._componentService.createComponentRef(this.type,this.data);this._uniqueID=t.id}},{key:"type",set:function(t){this._type=t,this._resetComponent()},get:function(){return this._type}},{key:"data",set:function(t){this._data=t,this._resetComponent()},get:function(){return this._data}}]),t}()).\u0275fac=function(t){return new(t||c)(v.Db(_),v.Db(v.O))},c.\u0275dir=v.yb({type:c,selectors:[["","lazyBind",""]],inputs:{type:["lazyBind","type"],data:["lazyBindData","data"]},features:[v.tb]}),c),O=[_,g],k=((p=function(){function t(){i(this,t)}return r(t,null,[{key:"forRoot",value:function(){return{ngModule:t,providers:[].concat(O)}}}]),t}()).\u0275mod=v.Bb({type:p}),p.\u0275inj=v.Ab({factory:function(t){return new(t||p)},providers:[],imports:[[]]}),p),E=a("C05f"),w=a("YtkY"),M=((m=function(){function t(){i(this,t),this._$data=new E.a(null)}return r(t,[{key:"data",get:function(){return this._$data.getValue()},set:function(t){this._$data.next(t)}},{key:"headline$",get:function(){return this._$data.asObservable().pipe(Object(w.a)((function(t){return t&&""!==t.headline?t.headline:void 0})))}},{key:"count$",get:function(){return this._$data.asObservable().pipe(Object(w.a)((function(t){return t&&null!=t.count?t.count:void 0})))}}]),t}()).\u0275fac=function(t){return new(t||m)},m.\u0275cmp=v.xb({type:m,selectors:[["uni-test-example"]],inputs:{data:"data"},decls:4,vars:6,consts:[[3,"innerHtml"]],template:function(t,e){1&t&&(v.Eb(0,"h1",0),v.Rb(1,"async"),v.Eb(2,"p",0),v.Rb(3,"async")),2&t&&(v.Vb("innerHtml",v.Sb(1,2,e.headline$),v.Yb),v.ub(2),v.Vb("innerHtml",v.Sb(3,4,e.count$),v.Yb))},pipes:[h.b],styles:["[_nghost-%COMP%]{display:block;margin:.5rem;padding:.5rem;border:1px solid #000}"],changeDetection:0}),m),T=((f=function t(e){i(this,t),this._componentDictionaryService=e,e.add("TEC",M)}).\u0275mod=v.Bb({type:f}),f.\u0275inj=v.Ab({factory:function(t){return new(t||f)(v.Lb(g))},imports:[[h.c,k]]}),f),D=((b=function(){function t(){i(this,t),this._$data=new E.a(null),this._$specialData=new E.a(null)}return r(t,[{key:"data",set:function(t){this._$data.next(t)},get:function(){return this._$data.getValue()}},{key:"specialData",set:function(t){this._$specialData.next(t)},get:function(){return this._$specialData.getValue()}},{key:"test$",get:function(){return this._$data.asObservable().pipe(Object(w.a)((function(t){return t&&""!==t.test?t.test:void 0})))}},{key:"test2$",get:function(){return this._$data.asObservable().pipe(Object(w.a)((function(t){return t&&""!==t.test2?t.test2:void 0})))}},{key:"special$",get:function(){return this._$specialData.asObservable().pipe(Object(w.a)((function(t){return""!==t?t:void 0})))}}]),t}()).\u0275fac=function(t){return new(t||b)},b.\u0275cmp=v.xb({type:b,selectors:[["uni-test-example2"]],inputs:{data:"data",specialData:"specialData"},decls:6,vars:9,consts:[[3,"innerHtml"]],template:function(t,e){1&t&&(v.Eb(0,"h1",0),v.Rb(1,"async"),v.Eb(2,"p",0),v.Rb(3,"async"),v.Eb(4,"strong",0),v.Rb(5,"async")),2&t&&(v.Vb("innerHtml",v.Sb(1,3,e.test$),v.Yb),v.ub(2),v.Vb("innerHtml",v.Sb(3,5,e.test2$),v.Yb),v.ub(2),v.Vb("innerHtml",v.Sb(5,7,e.special$),v.Yb))},pipes:[h.b],styles:["[_nghost-%COMP%]{display:block;margin:.5rem;padding:.5rem;border:1px dashed #000}"],changeDetection:0}),b),P=((d=function t(e){i(this,t),this._componentDictionaryService=e,e.add("TEC2",D)}).\u0275mod=v.Bb({type:d}),d.\u0275inj=v.Ab({factory:function(t){return new(t||d)(v.Lb(g))},imports:[[h.c,k]]}),d),I=a("sEIs"),S=["headline"],j=["text"],$=["count"],R=["special"];function J(t,e){1&t&&v.Fb(0)}function B(t,e){if(1&t&&(v.Hb(0),v.cc(1,J,1,0,"ng-container",19),v.Gb()),2&t){var n=e.$implicit;v.ub(1),v.Vb("lazyBind",n.type)("lazyBindData",n.data)}}var z,L,H,V=[{path:"",component:(z=function(){function t(e){i(this,t),this._host=e,this.markdown=a("vRLj"),this.boxes=[],this._counter=0}return r(t,[{key:"ngOnInit",value:function(){}},{key:"createBox",value:function(){this.boxes.push({type:"TEC",data:{headline:this.headline.nativeElement.value,count:this.count.nativeElement.value||++this._counter}})}},{key:"createSpecialBox",value:function(){this.boxes.push({type:"TEC2",data:{$data:{test:this.headline.nativeElement.value,test2:this.text.nativeElement.value},$specialData:this.special.nativeElement.value}})}}]),t}(),z.\u0275fac=function(t){return new(t||z)(v.Db(v.l))},z.\u0275cmp=v.xb({type:z,selectors:[["uni-test-case1"]],viewQuery:function(t,e){var n;1&t&&(v.bc(S,!0,v.l),v.bc(j,!0,v.l),v.bc($,!0,v.l),v.bc(R,!0,v.l)),2&t&&(v.Xb(n=v.Qb())&&(e.headline=n.first),v.Xb(n=v.Qb())&&(e.text=n.first),v.Xb(n=v.Qb())&&(e.count=n.first),v.Xb(n=v.Qb())&&(e.special=n.first))},decls:42,vars:5,consts:[[1,"container-input"],[1,"label-input"],["for","headline"],["id","headline","placeholder","Headline","type","text","value","Default Headline"],["headline",""],["for","text"],["id","text","placeholder","Text","type","text","value","Description Text"],["text",""],["for","count"],["id","count","placeholder","Count","type","text","value",""],["count",""],["for","special"],["id","special","placeholder","Special Data string","type","text","value",""],["special",""],[1,"actions"],[3,"click"],[1,"boxes"],[4,"ngFor","ngForOf"],[3,"innerHtml"],[4,"lazyBind","lazyBindData"]],template:function(t,e){1&t&&(v.Jb(0,"markdown"),v.dc(1),v.Ib(),v.Jb(2,"h2"),v.dc(3,"Example"),v.Ib(),v.Jb(4,"section",0),v.Jb(5,"h3"),v.dc(6,"Create a lazy component"),v.Ib(),v.Jb(7,"div",1),v.Jb(8,"label",2),v.dc(9,"Headline"),v.Ib(),v.Eb(10,"input",3,4),v.Ib(),v.Jb(12,"div",1),v.Jb(13,"label",5),v.dc(14,"Text"),v.Ib(),v.Eb(15,"input",6,7),v.Ib(),v.Jb(17,"div",1),v.Jb(18,"label",8),v.dc(19,"Count"),v.Ib(),v.Eb(20,"input",9,10),v.Ib(),v.Jb(22,"div",1),v.Jb(23,"label",11),v.dc(24,"Special Data string"),v.Ib(),v.Eb(25,"input",12,13),v.Ib(),v.Jb(27,"div",14),v.Jb(28,"button",15),v.Pb("click",(function(){return e.createBox()})),v.dc(29,"Create Test-Example"),v.Ib(),v.Jb(30,"button",15),v.Pb("click",(function(){return e.createSpecialBox()})),v.dc(31,"Create Test-Example2"),v.Ib(),v.Ib(),v.Ib(),v.Jb(32,"section"),v.Jb(33,"h3"),v.dc(34,"Lazy Bind"),v.Ib(),v.Jb(35,"div",16),v.cc(36,B,2,2,"ng-container",17),v.Ib(),v.Ib(),v.Jb(37,"section"),v.Jb(38,"h3"),v.dc(39,"JSON"),v.Ib(),v.Eb(40,"pre",18),v.Rb(41,"json"),v.Ib()),2&t&&(v.ub(1),v.ec(e.markdown.default),v.ub(35),v.Vb("ngForOf",e.boxes),v.ub(4),v.Vb("innerHtml",v.Sb(41,3,e.boxes),v.Yb))},directives:[y.a,h.j,C],pipes:[h.f],styles:["[_nghost-%COMP%]{display:block;padding:1rem}[_nghost-%COMP%]   nav[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:50px;background-color:#ff9240}[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding:0;display:flex;flex-direction:row}[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none;margin:0;padding:1rem;color:#eaecee}[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{color:#ff9240;background-color:#fff}[_nghost-%COMP%]   h2[_ngcontent-%COMP%]{background-color:#3a64bb;color:#fff;margin-bottom:0}[_nghost-%COMP%]   h3[_ngcontent-%COMP%]{background-color:#fb7f70;color:#fff}[_nghost-%COMP%]   .container-input[_ngcontent-%COMP%]{display:grid;grid-template-rows:auto;grid-gap:1rem}[_nghost-%COMP%]   .label-input[_ngcontent-%COMP%]{display:grid;grid-template-columns:160px 1fr;grid-gap:1rem;max-width:600px}[_nghost-%COMP%]   .actions[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-right:1em}[_nghost-%COMP%]   .boxes[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}[_nghost-%COMP%]   .boxes[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:1}"]}),z)}],N=((H=function t(){i(this,t)}).\u0275mod=v.Bb({type:H}),H.\u0275inj=v.Ab({factory:function(t){return new(t||H)},imports:[[I.d.forChild(V)],I.d]}),H),Y=((L=function t(){i(this,t)}).\u0275mod=v.Bb({type:L}),L.\u0275inj=v.Ab({factory:function(t){return new(t||L)},imports:[[h.c,y.b,N,k.forRoot(),T,P]]}),L)},vRLj:function(t,e,n){"use strict";n.r(e),e.default='You can find the complete test case at GitHub. [Test Case 1](https://github.com/uniprank/ngx-scrollspy/tree/master/library/TestCases/src/app/modules/test-case1)\n\n## TestCase1Module\n\n```js\n@NgModule({\n    declarations: [TestCase1Component],\n    imports: [CommonModule, LazyBindModule.forRoot(), TestExampleModule, TestExample2Module]\n})\nexport class TestCase1Module {}\n```\n\n## TestExampleModule\n\n```js\n@NgModule({\n    declarations: [TestExampleComponent],\n    imports: [CommonModule],\n    entryComponents: [TestExampleComponent]\n})\nexport class TestExampleModule {\n    constructor(private _componentDictionaryService: ComponentDictionaryService) {\n        _componentDictionaryService.add(\'TEC\', TestExampleComponent);\n    }\n}\n```\n\n### TestExampleComponent\n\n[See Test Example Component](https://github.com/uniprank/ngx-lazy-bind/blob/master/library/TestCases/src/app/modules/test-case1/components/test-example/test-example.component.ts)\n\n### TestExampleComponent HTML\n\n[See Test Example HTML](https://github.com/uniprank/ngx-lazy-bind/blob/master/library/TestCases/src/app/modules/test-case1/components/test-example/test-example.component.html)\n\n## TestExample2Module\n\n```js\n@NgModule({\n    declarations: [TestExample2Component],\n    imports: [CommonModule],\n    entryComponents: [TestExample2Component]\n})\nexport class TestExample2Module {\n    constructor(private _componentDictionaryService: ComponentDictionaryService) {\n        _componentDictionaryService.add(\'TEC2\', TestExample2Component);\n    }\n}\n```\n\n### TestExample2Component\n\n[See Test Example 2 Component](https://github.com/uniprank/ngx-lazy-bind/blob/master/library/TestCases/src/app/modules/test-case1/components/test-example2/test-example2.component.ts)\n\n### TestExample2Component HTML\n\n[See Test Example 2 HTML](https://github.com/uniprank/ngx-lazy-bind/blob/master/library/TestCases/src/app/modules/test-case1/components/test-example2/test-example2.component.html)\n\n## HTML Template\n\n```html\n<section>\n    <h3>Lazy Bind</h3>\n    <div class="boxes">\n        <ng-container *ngFor="let box of boxes">\n            <ng-container *lazyBind="box.type; data: box.data"></ng-container>\n        </ng-container>\n    </div>\n    \x3c!-- The first bind is the Component Name (TEC or TEC2), the second bind is the data to be use (object, string,  ...) --\x3e\n    <ng-container *lazyBind="\'TEC\'; data: {}"></ng-container>\n    <ng-container *lazyBind="\'TEC2\'; data: { $data: {}, $specialData: {} }"></ng-container>\n</section>\n```\n'}}])}();