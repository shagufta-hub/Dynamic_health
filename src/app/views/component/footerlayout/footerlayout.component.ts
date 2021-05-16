import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-footerlayout',
  templateUrl: './footerlayout.component.html',
  styleUrls: ['./footerlayout.component.css']
})
export class FooterlayoutComponent implements OnInit {

  test : Date = new Date();

  
  constructor() { }

  ngOnInit(): void {
  }

}
