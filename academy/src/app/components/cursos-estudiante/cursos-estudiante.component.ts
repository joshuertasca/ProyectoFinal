import { Component, ElementRef, OnInit, ViewChild, Renderer2, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profesor } from 'src/app/models/profesores';
import { ProfesoresService } from 'src/app/services/profesores.service';
import Swal from 'sweetalert2';
import { Estudiante } from 'src/app/models/estudiantes';
import { CrearEstudianteService } from 'src/app/services/crear-estudiante.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-cursos-estudiante',
  templateUrl: './cursos-estudiante.component.html',
  styleUrls: ['./cursos-estudiante.component.css']
})
export class CursosEstudianteComponent implements OnInit {


  @ViewChild('video') videoHTML?: ElementRef

  idP:any= '62b10618a41b7ce690364378';
  curso:any = {"nombre": "biologia","contenido":[{"tipo": "imagen","nombre": "imagen","informacion" : "data:image/jpeg;base64,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"}]};

  titulo:any='titulo';
  tipo:any='texto';
  contenido:any='https://www.youtube.com/embed/3XZeVZBzquU';
  indicecurso:any="";
  contadordiapositivas=0;
  urlvideo:any='https://www.youtube.com/embed/3XZeVZBzquU';
  idEstudiante:any;
  nombrecurso:any;
  registroEstudiante:any;
  iframe:any='<iframe  #Video class="d-flex justify-content-center mt-4 mb-0 " width="620" height="350" src="'+this.contenido+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'



  constructor(private _ProfesoresService: ProfesoresService, private _CrearEstudiantesServive:CrearEstudianteService, private renderer2: Renderer2, private router: Router, private idRouter: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.indicecurso = this.idRouter.snapshot.paramMap.get('indice')
    // this.urlvideo = sanitizer.bypassSecurityTrustUrl(this.contenido);
  }

  ngOnInit(): void {

    this.idEstudiante = localStorage.getItem('id')
    console.log(this.indicecurso)
    this.obtenerinformacion()
  // this.urlv()
  }

  obtenerinformacion(){

    this._ProfesoresService.getProfesor(this.idP).subscribe(data => {
      this.curso= data.cursos[this.indicecurso]
      console.log(this.curso)
      this.titulo=data.cursos[this.indicecurso].contenido[this.contadordiapositivas].nombre
      this.contenido=data.cursos[this.indicecurso].contenido[this.contadordiapositivas].informacion
      this.tipo=data.cursos[this.indicecurso].contenido[this.contadordiapositivas].tipo
      this.nombrecurso= data.cursos[this.indicecurso].nombre

      if (data.cursos[this.indicecurso].contenido[this.contadordiapositivas].tipo=="video") {

        let contenido=data.cursos[this.indicecurso].contenido[this.contadordiapositivas].informacion
        console.log(contenido)
        contenido =contenido.split('https://www.youtube.com/watch?v=');
        console.log(contenido)
        this.contenido='https://www.youtube.com/embed/'+contenido[1]
        console.log(this.contenido)

        const video = this.videoHTML?.nativeElement;
        this.iframe='<iframe  #Video class="d-flex justify-content-center mt-4 mb-0 " width="620" height="350" src="'+this.contenido+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        this.renderer2.setProperty(video, 'innerHTML', this.iframe)
      }



    })
  }

  forward() {
    const video = this.videoHTML?.nativeElement;
        this.renderer2.setProperty(video, 'innerHTML', '')
    if (this.contadordiapositivas<this.curso.contenido.length-1) {
      this.contadordiapositivas++;
      this.obtenerinformacion();



    }else {


      Swal.fire({
        title: 'Curso Finalizado',
        text: "Felicidades, acaba de completar el curso",
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {

          setTimeout(() => {


            this._CrearEstudiantesServive.getEstudiante(this.idEstudiante).subscribe(data => {
              let contenido = data.cursos.contenido;
              for (let index = 0; index < this.indicecurso; index++) {
                if (!contenido[index]||contenido[index]=={}) {
                  contenido[index] = { name: "curso" + index, value: 0 };
                }

              }

              contenido[this.indicecurso] = { name: this.nombrecurso, value: "100" };
              console.log(contenido)
              let cursos = {
                contenido: contenido,
                calificaciones: data.cursos.calificaciones,
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
              console.log("hola")
              console.log(this.registroEstudiante)

            });

            setTimeout(() => {

              this._CrearEstudiantesServive.putEstudiante(this.idEstudiante, this.registroEstudiante).subscribe(data => {
                console.log("el putaje del estudiante se subió correctamente")

              }, error => {
                console.log(error);
              })
           this.router.navigate(['cursosProfesor'])
            }, 200);


          }, 100);
        }
      })






    }

  }

  back() {
    const video = this.videoHTML?.nativeElement;
        this.renderer2.setProperty(video, 'innerHTML', '')
    if (this.contadordiapositivas>0) {
      this.contadordiapositivas--;
      this.obtenerinformacion();
    }

  }

  // urlv(){
  //   this.urlvideo =   this.sanitizer.bypassSecurityTrustResourceUrl(this.contenido);
  // }


}
