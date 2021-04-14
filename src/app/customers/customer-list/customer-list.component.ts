import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CustomerDTO } from '../customer.modal';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: CustomerDTO[];
  subscription: Subscription;

  constructor(private customerService: CustomersService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log("CustomerListComponent");
    this.subscription = this.customerService.customersChanged
      .subscribe(
        (customers: CustomerDTO[]) => {
          this.customers = customers;
        }
      ); 

    this.customerService.get().subscribe(
      (customers: CustomerDTO[]) => {
        this.customers = customers;
      }
    );
  }

  onNewCustomer() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
