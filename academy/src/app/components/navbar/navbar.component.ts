import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private idRouter: ActivatedRoute) { }

  nombre:any="";
  TituloDelComponente:any;

  ngOnInit(): void {

  this.nombre=localStorage.getItem('nombre');
  if(localStorage.getItem('tipo')=="estudiante"){
    this.TituloDelComponente="Estudiante"
   } else {
     this.TituloDelComponente="Profesor"
   }
  }

  salir(){
    localStorage.clear();
    this.router.navigate(['']);
  }

}
