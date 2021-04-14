import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { CustomerEditComponent } from './customers/customer-edit/customer-edit.component';
import { CustomerResolverService } from './customers/customer-resolver.service';
import { CustomerStartComponent } from './customers/customer-start/customer-start.component';
import { CustomersResolverService } from './customers/customers-resolver.service';
import { CustomersComponent } from './customers/customers.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/customers', pathMatch: 'full' },
  {
    path: 'customers',
    component: CustomersComponent,      
    resolve: [CustomersResolverService],
    children: [
      { path: '', component: CustomerStartComponent },
      { path: 'new', component: CustomerEditComponent },
      {
        path: ':id',
        component: CustomerDetailsComponent,
        resolve: [CustomerResolverService]
      },
      {
        path: ':id/edit',
        component: CustomerEditComponent,
        resolve: [CustomerResolverService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
