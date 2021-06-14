import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { FindAllComponentComponent } from './find-all-component/find-all-component.component';
import { SrchElasticComponent } from './srch-elastic/srch-elastic.component';

const routes: Routes = [
  {path:'', redirectTo:'create', pathMatch:'full'},
  {path:'create', component:CreateCustomerComponent},
  {path: 'update/:id', component: UpdateCustomerComponent},
  {path: 'search', component: SearchCustomerComponent},
  {path: 'delete', component: DeleteCustomerComponent},
  {path: 'findAll', component: FindAllComponentComponent},
  {path: 'searchYourText', component: SrchElasticComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
