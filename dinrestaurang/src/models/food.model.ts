export class Food {
  constructor(other?: any) {
    this._id = other._id;
    this.image = other.image;
    this.included = other.included;
    this.title = other.title;
    this.price = other.price;
    this.sorts = other.sorts;
  }
  public _id: string;
  public title: string;
  public sorts: string;
  public price: number;
  public image: string;
  public included: string;
}
