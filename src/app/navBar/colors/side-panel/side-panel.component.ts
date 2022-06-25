import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css']
})
export class SidePanelComponent implements OnInit {

 username = "vikas";
 @ViewChild('box') box: ElementRef;
  constructor() { }

  ngOnInit(): void {
    console.log(this.box);
  }
  

}
