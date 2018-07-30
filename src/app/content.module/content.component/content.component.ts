import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ElementData} from '../ElementData';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-content',
  template: `
    <div class="container">
      <div>
        <input type="text" name="search" placeholder="Search.." #input [(ngModel)]="this.inputValue">
        <button (click)="filterBoxes(input.value)">Search</button>
      </div>
      // TODO
      <ul>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
      
      <div class="row">
        <div *ngFor="let box of boxes | paginate: { itemsPerPage: 12, currentPage: p }" class="col-lg-4 container-comp">
          {{box.name}}
          <button class="btn btn-primary" (click)="navigateToElementInfo(box.id)">View details</button>
        </div>
      </div>
      <div >
        <pagination-controls (pageChange)="p = $event"></pagination-controls>
      </div>
      <div>
        {{inputValue}}
      </div>
      <div>
        {{userInfo}}
      </div>
    </div>
  `,
  styleUrls: ['content.component.css']
})
export class ContentComponent implements OnInit{

  constructor(private router: Router, private activeRouter: ActivatedRoute) {
  }

  inputValue: string;
  boxes: Array<ElementData> = [];
  paramId: string;
  p: number = 1;
  userInfo: string;

  navigateToElementInfo(id: number) {
    this.router.navigate(['content/'+id]);
  }

  ngOnInit(): void {
    this.paramId = this.activeRouter.snapshot.queryParams['elementId'];
    console.log('Selected id is: ' + this.paramId);

    for (let i = 0; i < 24; i++) {
      this.boxes.push(new ElementData(i, 'img', i.toString(), 'category'));
    }

    this.userInfo = localStorage.getItem('currentUser');
  }

  filterBoxes(value: number) {
    if (value != null) {
      console.log('Search value is: ' + value);
      this.boxes = this.boxes.filter(value1 => value1.id == value);
      console.log('filtered value is: ' + this.boxes);
    }
  }
}
