import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { CustomerDTO } from './customer.modal';

import { CustomersService } from './customers.service';

@Injectable({ providedIn: 'root' })
export class CustomersResolverService implements Resolve<CustomerDTO[]> {
  constructor(
    private customersService: CustomersService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log("CustomersResolverService");
    return this.customersService.get();
  }
}
