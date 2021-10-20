import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <app-footer></app-footer>
    <router-outlet></router-outlet>

  `,
  styles: [
  ]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
