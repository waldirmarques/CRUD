import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './views/home/home.component'
import {ProductCrudComponent} from './views/product-crud/product-crud.component'
import { ProductCreateComponent } from './components/products/product-create/product-create.component';
import { from } from 'rxjs';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"products",
    component: ProductCrudComponent
  },
  {
    path:"products/create",
    component: ProductCreateComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
