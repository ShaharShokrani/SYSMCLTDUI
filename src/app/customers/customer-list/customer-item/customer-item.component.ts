import { Component, Input, OnInit } from '@angular/core';
import { CustomerDTO } from '../../customer.modal';

@Component({
  selector: 'app-customer-item',
  templateUrl: './customer-item.component.html',
  styleUrls: ['./customer-item.component.css']
})
export class CustomerItemComponent implements OnInit {

  @Input() customer: CustomerDTO;  

  constructor() { }

  ngOnInit(): void {
  }

}
