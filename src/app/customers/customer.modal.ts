import { AddressDTO } from "./addresses/address.model";
import { ContactDTO } from "./contacts/contact.modal";

export class CustomerDTO {
  
    public id: number;
    public created: Date;
    public name: string;
    public customerNumber: string;
    public addresses: AddressDTO[];
    public contacts: ContactDTO[];

  constructor(id: number, created: Date, name: string, customerNumber: string, addresses: AddressDTO[], contacts: ContactDTO[]) {
    this.id = id;
    this.created = created;
    this.name = name;
    this.customerNumber = customerNumber;
    this.addresses = addresses;
    this.contacts = contacts;
  }
}
