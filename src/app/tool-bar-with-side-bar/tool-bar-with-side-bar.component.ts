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
  selctedChoice:string='Stack';
  closed=true;
  profImg='assets/black_white_pic.jpg'
  constructor() { }

  ngOnInit() {
    this.sideBarContentList=[
      {
        title:'Stack',
        path:'/stack/list'
      },
      {
      title:'Courses',
      path:'/courses/list'
      },
      {
        title:'Projects',
        path:'/courses/list'
        },
      {
          title:'Professional Experience',
          path:'/courses/list'
      },
      {
         title:'Contact me',
          path:'/contact'
      }
      
  ];
  //this.TBarChoices =['About','Products','Stack','Professional Experience','Contact me']
  }
  
  onSelect(choice){
    this.selctedChoice=choice;
    
  }
  SideBarClosed(){
    this.closed=true
  }
    SideBarOpened(){
    this.closed=false
  }
  chngProfImgClr(mouseState){
    if (mouseState=='hover'){
      this.profImg='assets/high_brightness_pic.jpg'
    }
    else if (mouseState == 'out'){
      this.profImg='assets/black_white_pic.jpg'
    }

  }

}
