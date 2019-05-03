import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarkdownModule } from 'ngx-markdown';

import { LazyBindModule } from 'ngx-lazy-bind';

import { TestExampleModule } from './components/test-example/test-example.module';
import { TestExample2Module } from './components/test-example2/test-example2.module';
import { TestCase1RoutingModule } from './test-case1-routing.module';
import { TestCase1Component } from './test-case1.component';

@NgModule({
    declarations: [TestCase1Component],
    imports: [CommonModule, MarkdownModule, TestCase1RoutingModule, LazyBindModule.forRoot(), TestExampleModule, TestExample2Module]
})
export class TestCase1Module {}
