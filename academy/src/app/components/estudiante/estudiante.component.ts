import { Component, OnInit, HostListener } from '@angular/core';
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

  TituloDelComponente:any;

  calificaciones = []

  contenido:any = []

  avance:any = []

  id: any;
  InformacionEstudiante: Estudiante[] = [];
  generomujer:boolean=false;
  tipo:any;
  NumeroTrofeos:any= 0;

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
            "name": "calificación",
            "series": this.contenido
          }

        ]







      })

    }
  }

  eliminarEstudiante(id:any){    //se deberia usar string, pero se pone any para empezar mas facil
      Swal.fire({
        title: 'desea eliminar contacto=',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
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

  actualizartrofeos() {

  }

}
