import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CustomerDTO } from '../customer.modal';
import { CustomersAPIService } from '../customers-api.service';
import { CustomersService } from '../customers.service';


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customer: CustomerDTO;
  id: number;

  constructor(private customerService: CustomersService,
              private customersAPIService: CustomersAPIService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.customer = this.customerService.getById(this.id);
        }
      );
  }

  onEditCustomer() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteCustomer() {
    this.customerService.delete(this.id).subscribe(
      () => {
        this.router.navigate(['/customers']);
      }
    );    
  }
}
