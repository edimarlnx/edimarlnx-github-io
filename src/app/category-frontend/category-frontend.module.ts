import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryFrontendComponent } from './category-frontend.component';
import { CategoryFrontendRoutingModule } from './category-frontend-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CategoryFrontendRoutingModule
  ],
  declarations: [CategoryFrontendComponent]
})
export class CategoryFrontendModule { }
