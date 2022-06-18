import { Component, ElementRef, OnInit, ViewChild, Renderer2, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profesor } from 'src/app/models/profesores';
import { ProfesoresService } from 'src/app/services/profesores.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-examenes-profesor',
  templateUrl: './examenes-profesor.component.html',
  styleUrls: ['./examenes-profesor.component.css']
})
export class ExamenesProfesorComponent implements OnInit {


  examenes: any = [];
  id: string = "62abde3e1f1bb0b48153307a";
  registroProfesor: any ={};



  constructor(private _ProfesoresService: ProfesoresService, private renderer2: Renderer2, private router: Router, private idRouter: ActivatedRoute) {


  }

  ngOnInit(): void {
    this.obtenerprofesor()
  }

  obtenerprofesor() {
    this._ProfesoresService.getProfesor(this.id).subscribe(data => {
      console.log(data)
      this.examenes = data.examenes
    })
  }

  borrarexamen(indice: number) {

    this._ProfesoresService.getProfesor(this.id).subscribe(data => {
      let exam = data.examenes
      exam.splice(indice,1)

      console.log(data)
      this.registroProfesor = {
        nombre: data.nombre,
        correo: data.correo,
        edad: data.edad,
        genero: data.genero,
        contrasena: data.contrasena,
        cursos: data.curso,
        examenes: exam

      }
      console.log(this.registroProfesor)
    })

    setTimeout(() => {


      console.log("hola1")
      console.log(this.registroProfesor)
      console.log("hola")
      this._ProfesoresService.putContacto(this.id, this.registroProfesor).subscribe(data => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'el examen se ha eliminado con exito',
          showConfirmButton: false,
          timer: 1500
        })

        window.location.reload();

      }, error => {
        console.log(error);
      })


    }, 500);

  }

}
