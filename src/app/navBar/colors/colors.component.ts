import { Component, Renderer2, ElementRef, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent {

  styleTwo: boolean = true;
  timeout: any;
  mytext: boolean = true;

  colors: any = [{a1: '#8ecae6', a2:'#219ebc', a3:'#023047', a4:'#ffb703', a5:'#fb8500',
                  a6: '#264653', a7:'#ccd5ae', a8:'#e9edc9', a9:"#fefae0", a10:"#faedcd",
                  a11: '#cdb4db',a12:'#ffc8dd',a13:'#ffafcc',a14:'#bde0fe',a15:'#a2d2ff'
}]

  constructor() {}


    copy(element: any) {
      var $temp = $("<input>");
      $("body").append($temp);
      $temp.val($(element).text()).select();
      document.execCommand("copy");
      $temp.remove(); 
      this.mytext = false;

    }
    moved(){
      this.mytext = true;
    }
}  
