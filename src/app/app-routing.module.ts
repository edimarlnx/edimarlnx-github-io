import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryFrontendComponent } from './category-frontend/category-frontend.component';

const routes: Routes = [
  {
    path: 'c/frontend',
    loadChildren: './category-frontend/category-frontend.module#CategoryFrontendModule'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
