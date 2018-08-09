import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {DomainService} from '../../services/domain.service';

@Component({
  selector: 'app-login-confirmation',
  template: `
    Login confirmed
    <app-preloader [showSpinner]="showSpinner"></app-preloader>
  `,
  styleUrls: ['signUp.confirmation.component.css'],
  providers: [DomainService]
})
export class SignUpConfirmationComponent implements OnInit{
  constructor(private http: HttpClient, private router: Router, private activeRoute: ActivatedRoute, public domainService: DomainService) {
  }

  showSpinner: boolean = false;
  uuid: string;

  ngOnInit(): void {
    this.uuid = this.activeRoute.snapshot.queryParams['param'];
    if (this.uuid != null) {
      this.showSpinner = true;
      this.http.post('http://localhost:9090/confirm/' + this.uuid, null,).subscribe(value => {
        this.showSpinner = false;
        this.router.navigate(['/content'],{queryParams:{'sucusessConfirmAccount':'true'}});
      }, error1 => {
        console.log('Error while confirmation signUp ' + error1);
      });
    }
  }

}
