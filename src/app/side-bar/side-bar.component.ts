import { Component, OnInit, Input } from '@angular/core';
import {sideBarContentInterface} from './sideBarContentInterface'
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
@Input()
sideBarContentList:sideBarContentInterface[];
selectedTitle:string;
  constructor() { }

  ngOnInit() {
    this.sideBarContentList=[
      {
        title:'stack',
        path:'/stack/list'
      },
      {
      title:'courses',
      path:'/courses/list'
      },
      {
        title:'projects',
        path:'/courses/list'
        },
      {
          title:'work experince',
          path:'/courses/list'
      },
  ]

  }
  onSelect(title){
    this.selectedTitle=title;

  }

}
