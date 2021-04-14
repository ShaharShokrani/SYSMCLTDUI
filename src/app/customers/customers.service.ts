import { Injectable } from '@angular/core';
import { Observable, of, pipe, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { CustomerDTO } from './customer.modal';
import { CustomersAPIService } from './customers-api.service';

@Injectable()
export class CustomersService {

    customersChanged = new Subject<CustomerDTO[]>();
    navigatedToEdit = new Subject<string>();    
    private customersDTOs: CustomerDTO[] = [];
    
    constructor(private _customersAPIService: CustomersAPIService) {}

    setCustomers(customersDTOs: CustomerDTO[]) {
        console.log("CustomersService.setCustomers");
        this.customersDTOs = customersDTOs;
        this.customersChanged.next(this.customersDTOs);
    }

    setCustomer(index: number) {
        return this.customersDTOs[index];
    }

    add(customer: CustomerDTO) {
        this._customersAPIService.insert(customer).subscribe(
            (customerDTO: CustomerDTO) => {
                this.customersDTOs.push(customerDTO);
                this.customersChanged.next(this.customersDTOs);
            }            
        )        
    }

    get() : Observable<CustomerDTO[]>{
        if (this.customersDTOs.length)
            return of(this.customersDTOs);

        return this._customersAPIService.get()
        .pipe(
            map(customers => {
              return customers.map(customer => {
                return {
                    ...customer,
                    addresses: customer.addresses ? customer.addresses : [],
                    contacts: customer.contacts ? customer.contacts : []
                };
              });
            }),
            tap(customers => {
              this.setCustomers(customers);
            })
          );
    }    

    getById(id: number) {
        console.log("getById");
        var event = this.customersDTOs.find(x => x.id === id);
        if (event) {
            return event;
        }
    }

    update(id: number, customerDTO: CustomerDTO) {
        console.log("update");
        customerDTO.id = id;
        this._customersAPIService.update(customerDTO)
        .subscribe(
            () => {
                var index = this.customersDTOs.findIndex(x => x.id == id);
                this.customersDTOs[index] = customerDTO;
                this.customersChanged.next(this.customersDTOs);
            }
        )                
    }

    delete(id: number) : Observable<any> {
        return this._customersAPIService.delete(id)
        .pipe(
            tap(() => {
                var index = this.customersDTOs.findIndex(x => x.id == id);
                this.customersDTOs.splice(index, 1);
                this.customersChanged.next(this.customersDTOs);
            })        
        )
    }    
}