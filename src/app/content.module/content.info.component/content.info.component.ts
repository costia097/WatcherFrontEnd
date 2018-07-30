import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-content-info',
  template: `
    <button class="btn btn-primary" (click)="goBackBtn()">Go back</button>
    {{elementId}}
  `,
  styleUrls: ['content.info.component.css']
})
export class ContentInfoComponent implements OnInit{
  constructor(private activeRoute: ActivatedRoute, private router: Router) {
  }

  elementId: number;

  goBackBtn() {
    this.router.navigate(['/content'],{queryParams: {
        elementId: this.elementId
    }});
  }

  ngOnInit(): void {
    this.activeRoute.params.forEach(value => {
      this.elementId = value['id'];
      console.log('Selected id: ' + this.elementId);
    })
  }
}
