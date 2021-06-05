import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './product-list/product-detail/product-detail.component';
import { ProductEditComponent } from './product-list/product-edit/product-edit.component';
import { ProductStartComponent } from './product/product-start/product-start.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [{ path:'',redirectTo:'/products',pathMatch:'full'},
{ path:'products',component:ProductComponent,children:[
  {path:'',component:ProductStartComponent},
  {path:'new',component:ProductEditComponent},
  {path:':id',component:ProductDetailComponent},
  {path:':id/edit',component:ProductEditComponent},

]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
