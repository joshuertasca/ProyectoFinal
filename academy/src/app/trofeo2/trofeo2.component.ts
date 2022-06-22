import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-trofeo2',
  templateUrl: './trofeo2.component.html',
  styleUrls: ['./trofeo2.component.css']
})
export class Trofeo2Component implements OnInit {
oscurecer: any = true

  constructor(private renderer2: Renderer2) { }

  ngOnInit(): void {
  }

activar(){
this.oscurecer=false
}
desactivar(){
  this.oscurecer=true

}
}
