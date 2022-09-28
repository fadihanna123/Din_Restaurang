export class AddForm {
  constructor(
    public title: string,
    public sorts: string,
    public price: number | null,
    public image: string,
    public included: string
  ) {}
}

export class IEditForm {
  constructor(
    public id: string,
    public title: string,
    public sorts: string,
    public price: number | null,
    public image: string,
    public included: string
  ) {}
}
