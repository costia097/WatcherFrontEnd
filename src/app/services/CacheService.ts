import {HttpClient} from '@angular/common/http';
import {EmailsLoginResponse} from './EmailsLoginResponse';
import {Injectable} from '@angular/core';

@Injectable()
export class CacheService {
  constructor(private http: HttpClient) {
  }

  public initData() {
    this.http.get<EmailsLoginResponse>('http://localhost:9090/allLoginsAndEmails').subscribe(value => {
      localStorage.setItem('allData', JSON.stringify(value));
    }, error1 => {
      console.log('Cannot init logins');
    });
  }
}
