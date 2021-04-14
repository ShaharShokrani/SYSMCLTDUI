export class ContactDTO {
  
    public id: number;
    public created: Date;
    public fullName: string;
    public officeNumber: string;
    public email: string;

    constructor(id: number, created: Date, fullName: string, officeNumber: string, email: string) {
        this.id = id;
        this.created = created;
        this.fullName = fullName;
        this.officeNumber = officeNumber;
        this.email = email;
  }
}