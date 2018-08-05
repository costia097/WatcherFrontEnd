export class EmailsLoginResponse {
  private _allLogins: Array<string> = [];
  private _allEmails: Array<string> = [];


  get allLogins(): Array<string> {
    return this._allLogins;
  }

  set allLogins(value: Array<string>) {
    this._allLogins = value;
  }

  get allEmails(): Array<string> {
    return this._allEmails;
  }

  set allEmails(value: Array<string>) {
    this._allEmails = value;
  }
}
