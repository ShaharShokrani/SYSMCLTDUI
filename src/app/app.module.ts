import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CustomersService } from './customers/customers.service';
import { CustomersAPIService } from './customers/customers-api.service';
import { CustomerEditComponent } from './customers/customer-edit/customer-edit.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { CustomerItemComponent } from './customers/customer-list/customer-item/customer-item.component';
import { CustomerStartComponent } from './customers/customer-start/customer-start.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,    
    HeaderComponent,
    CustomersComponent,
    CustomerListComponent,
    CustomerDetailsComponent,
    CustomerItemComponent,
    CustomerStartComponent,
    CustomerEditComponent,
    FooterComponent
  ],
  imports: [
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [
    CustomersAPIService,
    CustomersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
