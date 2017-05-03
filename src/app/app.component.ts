import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <ul>
  <li><a routerLink="/">Home</a></li>
  <li><a routerLink="about">About</a></li>
  <li><a routerLink="help">Help</a></li>
  </ul>
  <router-outlet></router-outlet>`,
})
export class AppComponent  { name = 'Angular'; }
