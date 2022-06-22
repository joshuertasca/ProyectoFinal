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
  id: any = "62b10618a41b7ce690364378";
  registroProfesor: any ={};
  TituloDelComponente:any;
  tipo:any;

  constructor(private _ProfesoresService: ProfesoresService, private renderer2: Renderer2, private router: Router, private idRouter: ActivatedRoute) {


  }

  ngOnInit(): void {
    // this.id = localStorage.getItem('id')
    // console.log(localStorage.getItem('id'))
    if(localStorage.getItem('tipo')=="estudiante"){
      this.tipo="estudiante"
     } else {
       this.tipo="profesor"
     }

    this.obtenerprofesor();
    this.TituloDelComponente="Examenes"

  }

  obtenerprofesor() {
    this._ProfesoresService.getProfesor(this.id).subscribe(data => {
      console.log(data)
      this.examenes = data.examenes
    })
  }

  borrarexamen(indice: number) {

    Swal.fire({
      title: '¿Está seguro que desea eliminar este Examen?',
      text: "Esta acción no se puede revertir",
      icon: 'warning',
      color:'#fff',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar',
      cancelButtonText: 'Cancelar',
      background: '#34a85391',
      backdrop: `
  rgba(0,0,123,0.4)

`

}).then((result) => {
  if (result.isConfirmed) {

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
  }})


  }

}
