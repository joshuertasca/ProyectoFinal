import { Component, ElementRef, OnInit, ViewChild, Renderer2, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profesor } from 'src/app/models/profesores';
import { ProfesoresService } from 'src/app/services/profesores.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-examen',
  templateUrl: './crear-examen.component.html',
  styleUrls: ['./crear-examen.component.css']
})
export class CrearExamenComponent implements OnInit {


  @ViewChild('advertencia') advHTML?: ElementRef
  @ViewChild('pregunta') input1:any;
  @ViewChild('opciona') input2:any;
  @ViewChild('opcionb') input3:any;
  @ViewChild('opcionc') input4:any;
  @ViewChild('opciond') input5:any;
  @ViewChild('respuesta') input6:any;
  TituloDelComponente:any;

  preguntas: any = []

  id: any = "62b10618a41b7ce690364378";
  registroProfesor: any ={};



  constructor(private _ProfesoresService: ProfesoresService, private renderer2: Renderer2, private router: Router, private idRouter: ActivatedRoute) { }

  ngOnInit(): void {
    if (localStorage.getItem('tipo')!='profesor') {
      this.router.navigate([''])
    }
    this.obtenerprofesor ()
    this.TituloDelComponente="Crear Examen";
    // this.id=localStorage.getItem('id')
  }

  guardarpregunta(pregunta: any, opciona: any, opcionb: any, opcionc: any, opciond: any, respuesta: any) {
    const advertencia = this.advHTML?.nativeElement;
    console.log(pregunta)
    if (pregunta == "" || opciona == "" || opcionb == "" || opcionc == "" || opciond == "") {
      this.renderer2.setProperty(advertencia, 'innerHTML', 'debe completar todos los campos para guardar la pregunta')
    } else {
      if (respuesta == "a" || respuesta == "b" || respuesta == "c" || respuesta == "d") {
        let pre:any = {
          pregunta: pregunta,
          opciona: opciona,
          opcionb: opcionb,
          opcionc: opcionc,
          opciond: opciond,
          respuesta: respuesta
        }

        this.preguntas.push(pre);

        Swal.fire(
          'hecho',
          'Pregunta agregada.',
          'success'
        );

        //limpiar campos
        this.input1.nativeElement.value = '';
        this.input2.nativeElement.value = '';
        this.input3.nativeElement.value = '';
        this.input4.nativeElement.value = '';
        this.input5.nativeElement.value = '';
        this.input6.nativeElement.value = '';
        this.renderer2.setProperty(advertencia, 'innerHTML', '')
      } else {

        this.renderer2.setProperty(advertencia, 'innerHTML', 'la respuesta solo puede ser a,b,c o d (en minuscula)')
      }
    }

    console.log(this.preguntas)
  }


  guardarcurso(nombre:string){


      this._ProfesoresService.getProfesor(this.id).subscribe(data => {
        let exam = data.examenes
        let examx = {
          nombre: nombre,
          preguntas: this.preguntas
        }
        exam.push(examx)
        console.log(data)
        this.registroProfesor ={
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
        this._ProfesoresService.putContacto(this.id,this.registroProfesor).subscribe(data=>{
          Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'el examen ha creado con exito',
              showConfirmButton: false,
              timer: 1500
          })

          this.router.navigate(['examenesProfesor'])

      }, error =>{
          console.log(error);
      })


  }, 500);

  }


  obtenerprofesor (){
    this._ProfesoresService.getProfesor(this.id).subscribe(data => {
      console.log(data)
    })
  }


}
