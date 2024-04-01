export class Item{
  id: number;
  name: string;
  price;
  status: string;


  constructor(Id, Name, Price, Status) {
    this.id = Id;
    this.name = Name;
    this.price = Price;
    this.status = Status;
  }
}
