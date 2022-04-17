export class Food {
  constructor(
    public id: string,
    public title: string,
    public sorts: string,
    public price: number,
    public image: string,
    public included: string
  ) {}
}
