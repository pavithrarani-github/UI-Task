import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   opened:boolean = false;
   isClicked:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  clicked(){
   this.isClicked=true;
  }
  image=['../../assets/angularimg.jpg']
}
