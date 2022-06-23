import { Component, Input, ElementRef, OnInit, ViewChild, Renderer2, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.css']
})
export class BarraLateralComponent implements OnInit {


  @ViewChild('estudiantes') estudiantesHTML?: ElementRef
  tituloestudiantes:String="";
  tipo:String="";
  nombre:any="";
  TituloDelComponente:any;

  constructor(private renderer2: Renderer2, private router: Router, private idRouter: ActivatedRoute) {

   }

  ngOnInit(): void {

    if(localStorage.getItem('tipo')=="estudiante"){
     this.tituloestudiantes="Estudiante"
     this.tipo="estudiante"
    } else {
      this.tituloestudiantes="Lista: Estudiantes"
      this.tipo="profesor"
    }

    this.nombre=localStorage.getItem('nombre');



  }

}
