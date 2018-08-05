import {Component, OnInit} from '@angular/core';
import {CacheService} from './services/CacheService';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
  `,
  styleUrls: ['./app.component.css'],
  providers: [CacheService]
})
export class AppComponent implements OnInit{
  constructor(public cache: CacheService) {
  }

  ngOnInit(): void {
    this.cache.initData();
  }
}
