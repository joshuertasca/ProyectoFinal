import { Component, ElementRef, OnInit, ViewChild, Renderer2, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profesor } from 'src/app/models/profesores';
import { ProfesoresService } from 'src/app/services/profesores.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cursos-profesor',
  templateUrl: './cursos-profesor.component.html',
  styleUrls: ['./cursos-profesor.component.css']
})
export class CursosProfesorComponent implements OnInit {

  @ViewChild('imagen') imagenHTML?: ElementRef
  @ViewChild('boton') botonHTML?: ElementRef
  @ViewChild('addimagen') addimagenHTML?: ElementRef
  @ViewChild('imputdiapositiva') imputHTML?: ElementRef
  @ViewChild('tabla') tablaHTML?: ElementRef
  @ViewChild('botoncrearcurso') crearHTML?: ElementRef
  @ViewChild('advertencia') advHTML?: ElementRef
  @ViewChild('tituloDiapositiva') input1: any;
  @ViewChild('imputdiapositiva') input2: any;
  @ViewChild('nombreCurso') nombre: any;



  cursos: any = []
  tipo1: any = "imagen";
  contenidoCurso: any = [];
  tabla: any = "";
  contador: number = 1;
  cursocreado: any = {};
  name: any = {};
  id: any = "62b10618a41b7ce690364378";
  profesor: any = {}
  registroProfesor: any = {}
  TituloDelComponente:any;
  tipo:any;

  constructor(private _ProfesoresService: ProfesoresService, private renderer2: Renderer2, private router: Router, private idRouter: ActivatedRoute) {

  };


  ngOnInit(): void {

    if(localStorage.getItem('tipo')=="estudiante"){
      this.tipo="estudiante"
     } else {
       this.tipo="profesor"
     }
    this.obtenerprofesor()
    this.TituloDelComponente="Cursos"
    // this.id = localStorage.getItem('idP')
  }


  addImagen(): void {
    const imagen = this.addimagenHTML?.nativeElement;
    const imput = this.imputHTML?.nativeElement;
    this.renderer2.setProperty(imagen, 'innerHTML', 'Agregar Imagen');
    this.renderer2.setAttribute(imput, 'placeholder', 'Pegar Link de la Imagen')
    this.tipo1 = "imagen";


  }
  addVideo() {
    const imagen = this.addimagenHTML?.nativeElement;
    const imput = this.imputHTML?.nativeElement;
    this.renderer2.setProperty(imagen, 'innerHTML', 'Agregar Video')
    this.renderer2.setAttribute(imput, 'placeholder', 'Pegar Link del video')
    this.tipo1 = "video";


  }
  addTexto() {
    const imagen = this.addimagenHTML?.nativeElement;
    const imput = this.imputHTML?.nativeElement;

    this.renderer2.setProperty(imagen, 'innerHTML', 'Agregar Texto')
    this.renderer2.setAttribute(imput, 'placeholder', 'Escribir Texto')

    this.tipo1 = "texto";

  }


  agregardiapositiva(titulo: string, conte: string, nombrecurso: string) {
    const advertencia = this.advHTML?.nativeElement;
    if (nombrecurso == '') {

      this.renderer2.setProperty(advertencia, 'innerHTML', 'Antes de agregar contenido debe agregar un nombre al curso')
    } else {

      this.renderer2.setProperty(advertencia, 'innerHTML', '')

      if (titulo == ' ' || conte == ' ') {
        this.renderer2.setProperty(advertencia, 'innerHTML', 'No puede agregar un ' + this.tipo1 + ' sin completar ambos campos')
      } else {
        let objeto: any = {
          "tipo": this.tipo1,
          "nombre": titulo,
          "informacion": conte
        }
        this.contenidoCurso.push(objeto)
        this.tabla = this.tabla + ' <tr> <th scope="row">' + this.contador + '</th>  <td>' + this.tipo1 + '</td>  <td>' + titulo + '</td> </tr> '
        this.contador++

        const tabla = this.tablaHTML?.nativeElement;
        this.renderer2.setProperty(tabla, 'innerHTML', this.tabla);
        const botoncrear = this.crearHTML?.nativeElement;
        this.renderer2.removeAttribute(botoncrear, 'disabled');
      }
    }


    this.input1.nativeElement.value = ' ';
    this.input2.nativeElement.value = ' ';

  }


  crearCurso(nombre: string) {

    this.cursocreado = {
      "nombre": nombre,
      "contenido": this.contenidoCurso
    }

    this.cursos.push(this.cursocreado)
    console.log(this.cursos)
    this.tipo1 = "imagen";
    this.contenidoCurso = [];
    this.tabla = "";
    this.contador = 1;
    const tabla = this.tablaHTML?.nativeElement;
    this.renderer2.setProperty(tabla, 'innerHTML', this.tabla);


    const botoncrear = this.crearHTML?.nativeElement;
    this.renderer2.setAttribute(botoncrear, 'disabled', '');

    this.addImagen();
    console.log(this.cursos);

    this.nombre.nativeElement.value = ' ';

    this.actualizarbase();

  }



  eliminarCurso(posicion: number) {
    this.cursos.splice(posicion, 1);
    console.log(this.cursos);

    this._ProfesoresService.getProfesor(this.id).subscribe(data => {

      console.log(data)
      this.registroProfesor = {
        nombre: data.nombre,
        correo: data.correo,
        edad: data.edad,
        genero: data.genero,
        contrasena: data.contrasena,
        cursos: this.cursos,
        examenes: data.examenes

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
          title: 'el curso se ha eliminado con exito',
          showConfirmButton: false,
          timer: 1500
        })

      }, error => {
        console.log(error);
      })
    }, 500);


  }

  actualizarbase() {

    this._ProfesoresService.getProfesor(this.id).subscribe(data => {

      console.log(data)
      this.registroProfesor = {
        nombre: data.nombre,
        correo: data.correo,
        edad: data.edad,
        genero: data.genero,
        contrasena: data.contrasena,
        cursos: this.cursos,
        examenes: data.examenes

      }
      console.log(this.registroProfesor)
    })

    setTimeout(() => {

      this._ProfesoresService.putContacto(this.id, this.registroProfesor).subscribe(data => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'el curso ha creado con exito',
          showConfirmButton: false,
          timer: 1500
        })

      }, error => {
        console.log(error);
      })
    }, 500);
  }

  obtenerProfesores() {
    this._ProfesoresService.getProfesores().subscribe(data => {
      console.log(data)
    });
  }

  obtenerprofesor() {
    this._ProfesoresService.getProfesor(this.id).subscribe(data => {
      this.cursos = data.cursos;
      console.log(data)
    })
  }


}
