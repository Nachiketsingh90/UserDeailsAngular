import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { FindAllComponentComponent } from './find-all-component/find-all-component.component';
import { SrchElasticComponent } from './srch-elastic/srch-elastic.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    UpdateCustomerComponent,
    DeleteCustomerComponent,
    SearchCustomerComponent,
    FindAllComponentComponent,
    SrchElasticComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
