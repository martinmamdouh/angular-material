import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {
  choices:string[];
  selctedChoice:string;
  constructor() { }

  ngOnInit() {
    this.choices=['Home','LogIn','LogOut']
  }
onSelect(choice){
  this.selctedChoice=choice;

}
}
