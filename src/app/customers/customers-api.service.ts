import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map, tap, take, exhaustMap, share, shareReplay, catchError } from 'rxjs/operators';

import { Observable, EMPTY } from 'rxjs';
import { CustomerDTO } from './customer.modal';

@Injectable()
export class CustomersAPIService {


  fetchCustomers$: Observable<CustomerDTO[]>[] = [];

  constructor (
    private _httpClient: HttpClient
  ) {}

  insert(customerDTO: CustomerDTO) : Observable<CustomerDTO> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
    return this._httpClient
      .post<CustomerDTO>(
        'http://localhost:5000/api/customers',
        customerDTO,
        httpOptions
      );
  }

  get() : Observable<CustomerDTO[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this._httpClient
      .get<CustomerDTO[]>(
        'http://localhost:5000/api/customers',
        httpOptions
      );
  }

  update(customerDTO: CustomerDTO) : Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this._httpClient
      .put<any>(
        'http://localhost:5000/api/customers',
        customerDTO,
        httpOptions
      );  
  }

  delete(id: number) :Observable<any> {
    return this._httpClient
      .delete<any>(
        'http://localhost:5000/api/customers/' + id,
        {}
      );
  }

  getById(id: number) : Observable<CustomerDTO> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this._httpClient
      .get<CustomerDTO>(
        'http://localhost:5000/api/customers/' + id,        
        httpOptions
      );
  }
}