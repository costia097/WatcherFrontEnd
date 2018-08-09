import {Component, OnInit} from '@angular/core';
import {ElementData} from '../ElementData';
import {ActivatedRoute, Router} from '@angular/router';
import {DomainService} from '../../services/domain.service';

@Component({
  selector: 'app-content',
  template: `    
    <div class="container">
      <div class="row input-form">
        <div class="col-sm-6">
          <div class="input-group">
              <input type="text" class="form-control"  placeholder="Search"   #input  (input)="onSearchChange($event.target.value)">
              <button class="btn btn-outline-success" (click)="filterBoxes(input.value)">Search</button>
          </div>
        </div>
      </div>

      <ul *ngFor="let item of searchedItems">
        <li>{{item}}</li>
      </ul>

      <div *ngIf="showSuccActivatedAccount" class="alert alert-success">
        <strong>Success!</strong> Activation  successful.
      </div>
      
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
        {{userInfo}}
      </div>
    </div>
  `,
  styleUrls: ['content.component.css'],
  providers: [DomainService]
})
export class ContentComponent implements OnInit{

  constructor(private router: Router, private activeRouter: ActivatedRoute, private domainService: DomainService) {
  }

  boxes: Array<ElementData> = [];
  paramId: string;
  p: number = 1;
  userInfo: string;
  searchedItems: Array<string> = [];
  allItems: Array<string> = [];
  showSuccActivatedAccount: boolean = false;

  navigateToElementInfo(id: number) {
    this.router.navigate(['content/'+id]);
  }

  onSearchChange(searchValue : string ) {
    if (searchValue.length > 0) {
      this.searchedItems = this.allItems.filter(value => value.startsWith(searchValue));
    } else {
      this.searchedItems = null;
    }
  }

  ngOnInit(): void {
    this.paramId = this.activeRouter.snapshot.queryParams['elementId'];
    this.showSuccActivatedAccount = this.activeRouter.snapshot.queryParams['sucusessConfirmAccount'];
    console.log('Selected id is: ' + this.paramId);

    for (let i = 0; i < 24; i++) {
      this.boxes.push(new ElementData(i, 'img', i.toString(), 'category'));
    }

    this.userInfo = localStorage.getItem('currentUser');
    this.allItems.push('A');
    this.allItems.push('AA');
    this.allItems.push('AAA');
    this.allItems.push('B');
    this.allItems.push('BB');
    this.allItems.push('BBB');

    if (this.showSuccActivatedAccount) {
      setTimeout(args => {
        this.showSuccActivatedAccount = false;
      }, 3000);
    }
  }

  filterBoxes(value: number) {
    if (value != null) {
      console.log('Search value is: ' + value);
      this.boxes = this.boxes.filter(value1 => value1.id == value);
      console.log('filtered value is: ' + this.boxes);
    }
  }
}
