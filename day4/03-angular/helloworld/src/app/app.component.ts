import { Component } from '@angular/core';

@Component({
  selector : 'app-root',
  template : `
  <h1>{{ title.toUpperCase() }}</h1>
  <h1 innerHTML="{{ title.length * 10  }}"></h1>
  <h1 [innerHTML]="title.toLowerCase()"></h1>
  <h1 bind-innerHTML="title"></h1>
  <input type="text" value="{{ title }}">
  <input type="text" [value]="title">
  <input type="text" bind-value="title">
  <div class="{{selectedStyle}}"> I am Box </div>
  `,
  styles : [`
    .box{
      width : 200px;
      height : 200px;
      background-color : orange;
      margin : 20px auto;
    }
  `]
})
export class AppComponent {
  title = 'Hello World Again';
  selectedStyle = "box";
}
