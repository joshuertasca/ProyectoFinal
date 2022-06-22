import { Component, ElementRef, OnInit,  Renderer2, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {



  constructor(private renderer2:Renderer2) { }

  ngOnInit(): void {

  }



}
