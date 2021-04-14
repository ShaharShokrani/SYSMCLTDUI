import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  id: number;
  editMode = false;
  customerForm: FormGroup;

  get contactsControls() {
    return (this.customerForm.get('contacts') as FormArray).controls;
  }

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomersService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  onSubmit() {
    console.log("CustomerEditComponent.onSubmit");
    // const newCustomer = new Customer(
    //   this.customerForm.value['name'],    
    //   this.customerForm.value['customerNumber'],
    //   this.customerForm.value['contacts']);
    if (this.editMode) {
        this.customerService.update(this.id, this.customerForm.value);
    } else {
        this.customerService.add(this.customerForm.value);
    }
    this.onCancel();
  }

  onAddContact() {
    (<FormArray>this.customerForm.get('contacts')).push(
      new FormGroup({
        fullName: new FormControl(null, Validators.required)
      })
    );
  }

  onDeleteContact(index: number) {
    (<FormArray>this.customerForm.get('contacts')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['/customers']);
  }

  private initForm() {
    let customerName = '';
    let customerCustomerNumber = '';
    let customerContacts = new FormArray([]);

    if (this.editMode) {
      const customer = this.customerService.getById(this.id);
      customerName = customer.name;
      customerCustomerNumber = customer.customerNumber;
      if (customer['contacts']) {
        for (let contact of customer.contacts) {
          customerContacts.push(
            new FormGroup({
              fullName: new FormControl(contact.fullName, Validators.required)
            })
          );
        }
      }
    }

    this.customerForm = new FormGroup({
      name: new FormControl(customerName, Validators.required),
      customerNumber: new FormControl(customerCustomerNumber, [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
      contacts: customerContacts
    });
  }
}
