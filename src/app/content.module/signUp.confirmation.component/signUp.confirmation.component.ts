import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login-confirmation',
  template: `
    Login confirmed
  `,
  styleUrls: ['signUp.confirmation.component.css']
})
export class SignUpConfirmationComponent implements OnInit{
  constructor(private http: HttpClient, private router: Router, private activeRoute: ActivatedRoute) {
  }

  uuid: string;

  ngOnInit(): void {
    this.uuid = this.activeRoute.snapshot.queryParams['param'];
    if (this.uuid != null) {
      this.http.post('http://localhost:9090/confirm/' + this.uuid, null,).subscribe(value => {
        this.router.navigate(['/']);
      }, error1 => {
        console.log('Error while confirmation signUp ' + error1);
      });
    }
  }

}
