export class ElementData {

  constructor(id: number, img: any, name: string, category: string) {
    this._id = id;
    this._img = img;
    this._name = name;
    this._category = category;
  }

  private _id: number;
  private _img: any;
  private _name: string;
  private _category: string;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get img(): any {
    return this._img;
  }

  set img(value: any) {
    this._img = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get category(): string {
    return this._category;
  }

  set category(value: string) {
    this._category = value;
  }
}
