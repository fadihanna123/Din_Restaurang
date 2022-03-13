export class IFood {
  constructor(other?: any) {
    this.title = other.title;
    this.image = other.image;
    this.included = other.included;
    this.sorts = other.sorts;
    this.price = other.price;
  }
  public title: string;
  public sorts: string;
  public price: number;
  public image: string;
  public included: string;
}
