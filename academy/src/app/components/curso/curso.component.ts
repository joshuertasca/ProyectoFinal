import { Component, ElementRef, OnInit,  Renderer2, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  @ViewChild('CursoTitle') title?:ElementRef;
  @ViewChild('siguiente') video?:ElementRef;
  @ViewChild('AsVideo')video1?:ElementRef;



  constructor(private renderer2:Renderer2) { }

  ngOnInit(): void {

  }

  forward(){
  const video1 = this.video1?.nativeElement
  const siguiente1  = this.video?.nativeElement
    const curso = this.title?.nativeElement
    const data = siguiente1.dataset.color

    const siguiente2 = this.video1?.nativeElement
    if(data == 'false'){
        this.renderer2.addClass(curso, 'cambiandoColor')
        this.renderer2.setAttribute( siguiente1, 'data-color', 'true')
        this.renderer2.createElement(siguiente2, 'string' )
        this.renderer2.setAttribute(video1, 'src', 'https://www.youtube.com/embed/wp43OdtAAkM')
    }else{
      this.renderer2.removeClass(curso, 'cambiandoColor')
      this.renderer2.setAttribute(siguiente1, 'data-color', 'false')
    }

}
back(){
    const freddy = this.video1?.nativeElement
    this.renderer2.setAttribute(freddy, 'src', 'https://www.youtube.com/embed/QDCohXW6blg')
}




}
