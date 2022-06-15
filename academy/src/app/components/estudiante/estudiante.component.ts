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

  calificaciones = [
    { name: "Biologia", value: 78 },
    { name: "matematicas", value: 50 },
    { name: "fisica", value: 30 },
    { name: "historia", value: 60 }
  ]

  avance = [
    {
      "name": "calificación",
      "series": [
        { "name": "Biologia",  "value": 70},
        { "name": "Historia",  "value": 80},
        { "name": "fisica", "value": 30},
        { "name": "matematicas", "value": 100}
      ]
    }

  ];

  id: string | null;
  InformacionEstudiante: Estudiante[] = [];
  generomujer:boolean=false;

  @HostListener('window:beforeunload', ['$event'])
  onMessage(event:any) {
      if (true) {
          event.preventDefault();
          event.returnValue = "";
          return "";
      }
  }

  constructor(private _CrearEstudianteService: CrearEstudianteService, private router: Router, private idRouter: ActivatedRoute) {

    this.id = this.idRouter.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.rellenarInformacion()


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

        if (data.genero=="mujer") {
          this.generomujer=true;
        }else{
          this.generomujer=false;
        }



      })

    }
  }

  eliminarEstudiante(){

  }

}
