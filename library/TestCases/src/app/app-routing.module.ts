import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
    { path: 'test-case-1', loadChildren: './modules/test-case1/test-case1.module#TestCase1Module' },
    { path: '', redirectTo: '/test-case-1', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
