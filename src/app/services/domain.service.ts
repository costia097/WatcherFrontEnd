import {Injectable} from '@angular/core';

@Injectable()
export class DomainService {
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
