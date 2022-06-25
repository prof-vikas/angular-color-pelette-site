import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  {

  username = "vikas"
  @ViewChild('apple') apple:ElementRef;
  constructor() { }

  ngAfterViewInit(){
    console.log(this.apple);
    this.apple.nativeElement.style.backgroundColor="blue";
  }

}
