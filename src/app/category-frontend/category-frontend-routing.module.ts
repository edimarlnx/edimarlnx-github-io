import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryFrontendComponent } from './category-frontend.component';

const frontendRoutes: Routes = [
  {
    path: ':section',
    component: CategoryFrontendComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(frontendRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CategoryFrontendRoutingModule { }
