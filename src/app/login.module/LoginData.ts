export class LoginData {
  private _userName: string;
  private _roles: Array<string>;
  private _permissions: Array<string>;


  get userName(): string {
    return this._userName;
  }

  set userName(value: string) {
    this._userName = value;
  }

  get roles(): Array<string> {
    return this._roles;
  }

  set roles(value: Array<string>) {
    this._roles = value;
  }

  get permissions(): Array<string> {
    return this._permissions;
  }

  set permissions(value: Array<string>) {
    this._permissions = value;
  }
}
