import { Component, ElementRef, OnInit, ViewChild, Renderer2, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profesor } from 'src/app/models/profesores';
import { ProfesoresService } from 'src/app/services/profesores.service';
import Swal from 'sweetalert2';
import { Estudiante } from 'src/app/models/estudiantes';
import { CrearEstudianteService } from 'src/app/services/crear-estudiante.service';

@Component({
  selector: 'app-examenes-estudiante',
  templateUrl: './examenes-estudiante.component.html',
  styleUrls: ['./examenes-estudiante.component.css']
})
export class ExamenesEstudianteComponent implements OnInit {

  @ViewChild('respuesta') respuestaHTML?: ElementRef
  @ViewChild('btnconfirmar') btnHTML?: ElementRef

  preguntas: any = [{"pregunta":"contenido de la pregunta 1","opciona":"contenido opcion de respuesta","opcionb":"contenido opcion de respuesta","opcionc":"contenido opcion de respuesta","opciond":"contenido opcion de respuesta", "respuesta":"A"}];
  respuesta:string ='';
  contador:number=0;
  puntaje:number=0;
  valorpregunta:number=0;
  id: string = "62abde3e1f1bb0b48153307a";
  nombreExamen: string="";
  indiceExamen: any;
  idEstudiante: string = "62a93c47284ad0630e38195e"
  registroEstudiante: any= {};

  constructor(private _ProfesoresService: ProfesoresService, private _CrearEstudiantesServive:CrearEstudianteService, private renderer2: Renderer2, private router: Router, private idRouter: ActivatedRoute) {
    this.indiceExamen = this.idRouter.snapshot.paramMap.get('indice')
   }

  ngOnInit(): void {

    this.llamarinformación ()

    setTimeout(() => {
      this.calcularvalorpregunta ()
    }, 1000);
  }

  siguiente(){

    if (this.contador< this.preguntas.length-1) {
      const respuesta1 = this.respuestaHTML?.nativeElement;
      this.renderer2.setProperty(respuesta1, 'innerHTML', 'No ha seleccionado ninguna respuesta');

      console.log(this.preguntas[this.contador].respuesta+"respuesta correcta")
      console.log(this.respuesta+ "respuesta dada")
      if (this.preguntas[this.contador].respuesta==this.respuesta) {
        this.puntaje= this.puntaje+this.valorpregunta;
      }
      this.respuesta=""
      this.contador= this.contador+1;
      console.log(this.puntaje)

      const boton = this.btnHTML?.nativeElement;
      this.renderer2.setAttribute(boton, 'disabled', '');

    } else{

      if (this.preguntas[this.contador].respuesta==this.respuesta) {
        this.puntaje= this.puntaje+this.valorpregunta;
      }
      console.log(this.puntaje)
      Swal.fire({
        title: 'Examen Finalizado',
        text: "su resultado final fue de "+ this.puntaje +" % sobre 100%",
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {

          this.subirPuntaje ()
          setTimeout(() => {
            this.router.navigate(['examenesProfesor'])
          }, 100);
        }
      })


    }


  }

  a(){
    const respuesta = this.respuestaHTML?.nativeElement;
    this.renderer2.setProperty(respuesta, 'innerHTML', 'La respuesta seleccionada es A');
    this.respuesta="a"
    const boton = this.btnHTML?.nativeElement;
    this.renderer2.removeAttribute(boton, 'disabled');
  }
  b(){
    const respuesta = this.respuestaHTML?.nativeElement;
    this.renderer2.setProperty(respuesta, 'innerHTML', 'La respuesta seleccionada es B');
    this.respuesta="b"
    const boton = this.btnHTML?.nativeElement;
    this.renderer2.removeAttribute(boton, 'disabled');
  }
  c(){
    const respuesta = this.respuestaHTML?.nativeElement;
    this.renderer2.setProperty(respuesta, 'innerHTML', 'La respuesta seleccionada es C');
    this.respuesta="c"
    const boton = this.btnHTML?.nativeElement;
    this.renderer2.removeAttribute(boton, 'disabled');
  }
  d(){
    const respuesta = this.respuestaHTML?.nativeElement;
    this.renderer2.setProperty(respuesta, 'innerHTML', 'La respuesta seleccionada es D');
    this.respuesta="d"
    const boton = this.btnHTML?.nativeElement;
    this.renderer2.removeAttribute(boton, 'disabled');
  }
  calcularvalorpregunta (){
    let Npreguntas = this.preguntas.length;
    this.valorpregunta= 100/Npreguntas;
  }
  llamarinformación (){
    this._ProfesoresService.getProfesor(this.id).subscribe(data => {
      console.log(data)
      this.indiceExamen= parseInt(this.indiceExamen)
      this.nombreExamen = data.examenes[this.indiceExamen].nombre
      this.preguntas = data.examenes[this.indiceExamen].preguntas
    })
  }

  subirPuntaje (){

    this._CrearEstudiantesServive.getEstudiante(this.idEstudiante).subscribe(data => {

      let calificaciones = data.cursos.calificaciones;
      for (let index = 0; index < this.indiceExamen; index++) {
        if (!calificaciones[index]) {
          calificaciones[index]={name: "-", value: 0};
        }

      }

      calificaciones[this.indiceExamen]= {name: this.nombreExamen, value: this.puntaje};
      console.log(calificaciones)
      let cursos = {
        contenido: data.cursos.contenido,
        calificaciones:calificaciones,
        trofeos: data.cursos.trofeos
      }
      this.registroEstudiante = {
        nombre: data.nombre,
        correo: data.correo,
        edad: data.edad,
        genero: data.genero,
        correoProfesor: data.correoProfesor,
        contrasena: data.contrasena,
        cursos: cursos

      }
      console.log(this.registroEstudiante)
    })

    setTimeout(() => {

      this._CrearEstudiantesServive.putEstudiante(this.idEstudiante, this.registroEstudiante).subscribe(data => {
        console.log("el putaje del estudiante se subió correctamente")

      }, error => {
        console.log(error);
      })
    }, 500);
  }

}
