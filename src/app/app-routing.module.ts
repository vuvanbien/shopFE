import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    { path: 'category', component: CategoryComponent }
  ]
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
