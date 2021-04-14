export class AddressDTO {
  
    public id: number;
    public created: Date;
    public city: string;
    public street: string;

    constructor(id: number, created: Date, city: string, street: string) {
        this.id = id;
        this.created = created;
        this.city = city;
        this.street = street;                
  }
}
