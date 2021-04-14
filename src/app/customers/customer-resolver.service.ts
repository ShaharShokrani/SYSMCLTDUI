import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { CustomerDTO } from './customer.modal';

import { CustomersService } from './customers.service';

@Injectable({ providedIn: 'root' })
export class CustomerResolverService implements Resolve<CustomerDTO> {
  constructor(
    private _customersService: CustomersService,
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      return this._customersService.getById(route.params['id']);
  }
}
