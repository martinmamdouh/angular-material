import { Component, OnInit, Input } from '@angular/core';
import { sideBarContentInterface } from '../side-bar/sideBarContentInterface';

@Component({
  selector: 'app-tool-bar-with-side-bar',
  templateUrl: './tool-bar-with-side-bar.component.html',
  styleUrls: ['./tool-bar-with-side-bar.component.css']
})
export class ToolBarWithSideBarComponent implements OnInit {
  @Input()
  sideBarContentList:sideBarContentInterface[];
  selectedTitle:string;
  TBarChoices:string[];
  selctedChoice:string;
  closed=true;
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
  ];
  this.TBarChoices =['Home','LogIn','LogOut']
  }
  onSideSelect(title){
    this.selectedTitle=title;
  }
  onSelect(choice){
    this.selctedChoice=choice;
  }
  SideBarclosed(){
    this.closed=!this.closed
  }
}
