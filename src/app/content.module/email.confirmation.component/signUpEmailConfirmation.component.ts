import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector:'app-sighnUp-email',
  template:`
    Send email on your email {{email}}
  `,
  styleUrls: ['signUpEmailConfirmation.component.css']
})
export class SignUpEmailConfirmationComponent implements OnInit{
  constructor(private activeRoute: ActivatedRoute) {
  }

  email: string;

  ngOnInit(): void {
    this.email = this.activeRoute.snapshot.queryParams['email'];
  }
}
