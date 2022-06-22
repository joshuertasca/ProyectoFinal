import { Component, ElementRef, OnInit, ViewChild, Renderer2, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Estudiante } from 'src/app/models/estudiantes';
import { CrearEstudianteService } from 'src/app/services/crear-estudiante.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {

  @ViewChild('desactivar') desactivarHTML?: ElementRef
  @ViewChild('activar') activarHTML?: ElementRef



  TituloDelComponente:any;

  calificaciones = []

  contenido:any = []

  avance:any = []
  oscurecer: any = [true, true,true, true,true, true,true, true,true, true,true, true,true, true,true];
  id: any;
  InformacionEstudiante: Estudiante[] = [];
  generomujer:boolean=false;
  tipo:any;
  NumeroTrofeos:any= 0;
  trofeos:any=["nivel 1", "nivel 2", "nivel 3", "nivel 4", "nivel 5" , "nivel 6" , "nivel 7" , "nivel 8" , "nivel 9" , "nivel 10" , "nivel 11" , "nivel 12" , "nivel 13" , "nivel 14" , "nivel 15"]
  registroEstudiante:any;

  // @HostListener('window:beforeunload', ['$event'])
  // onMessage(event:any) {
  //     if (true) {
  //         event.preventDefault();
  //         event.returnValue = "";
  //         return "";
  //     }
  // }

  constructor(private _CrearEstudianteService: CrearEstudianteService, private router: Router, private idRouter: ActivatedRoute) {

    this.id = this.idRouter.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.rellenarInformacion()
    this.TituloDelComponente ="Perfil Estudiante"
    if(localStorage.getItem('tipo')=="estudiante"){
      this.tipo="estudiante"
     } else {
       this.tipo="profesor"
     }
  }

  rellenarInformacion() {
    if (this.id !== null) {
      this._CrearEstudianteService.getEstudiante(this.id).subscribe(data => {
        this.InformacionEstudiante = data
        console.log(this.InformacionEstudiante)
        this.InformacionEstudiante[0] = data.nombre;
        this.InformacionEstudiante[1] = data.correo;
        this.InformacionEstudiante[2] = data.edad;
        this.InformacionEstudiante[3] = data.contrasena;
        this.InformacionEstudiante[4] = data._id;
        this.oscurecer=data.cursos.trofeos
        if (data.genero=="mujer") {
          this.generomujer=true;
        }else{
          this.generomujer=false;
        }

        let premios = data.cursos.trofeos;
        console.log(premios)
        for (let index:any = 0; index < 15; index++) {
          console.log(premios[index])
          if (premios[index]==true) {
            this.NumeroTrofeos=this.NumeroTrofeos+1;
          }
        }

        console.log(this.NumeroTrofeos)


        this.calificaciones=data.cursos.calificaciones;
        this.contenido=data.cursos.contenido;
        console.log(this.contenido)
        this.avance = [
          {
            "name": "avance curso",
            "series": this.contenido
          }

        ]







      })

    }
  }

  eliminarEstudiante(id:any){    //se deberia usar string, pero se pone any para empezar mas facil
      Swal.fire({
        title: '¿Está seguro que desea eliminar este contacto?',
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

          this._CrearEstudianteService.deleteEstudiante(id).subscribe(data =>{
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          );
          this.router.navigate(['estudiantes'])
          }, error => {
            console.log(error)
        })


        }
      })



  }



  desactivar(indice:any){
    this.oscurecer[indice]=false
    this._CrearEstudianteService.getEstudiante(this.id).subscribe(data => {

      let trofeos = data.cursos.trofeos
      trofeos[indice]=false
      console.log(trofeos)
      let cursos = {
        contenido: data.cursos.contenido,
        calificaciones:data.cursos.contenido,
        trofeos: trofeos
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

      this._CrearEstudianteService.putEstudiante(this.id, this.registroEstudiante).subscribe(data => {
        console.log("los trofeos se actualizaron correctamente")

      }, error => {
        console.log(error);
      })
    }, 500);


  }

  activar(indice:any){
    this.oscurecer[indice]=true
    this._CrearEstudianteService.getEstudiante(this.id).subscribe(data => {

      let trofeos = data.cursos.trofeos
      trofeos[indice]=true
      console.log(trofeos)
      let cursos = {
        contenido: data.cursos.contenido,
        calificaciones:data.cursos.contenido,
        trofeos: trofeos
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

      this._CrearEstudianteService.putEstudiante(this.id, this.registroEstudiante).subscribe(data => {
        console.log("los trofeos se actualizaron correctamente")

      }, error => {
        console.log(error);
      })
    }, 500);


  }


}
