import { AstMemoryEfficientTransformer } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiantes';
import { CrearEstudianteService } from 'src/app/services/crear-estudiante.service';

@Component({
  selector: 'app-trofeos',
  templateUrl: './trofeos.component.html',
  styleUrls: ['./trofeos.component.css']
})
export class TrofeosComponent implements OnInit {

  id:any;
  tipo:any;
  idEstudiante:any;
  trofeos:any;


  niveles:any=["nivel 1","nivel 2","nivel 3","nivel 4","nivel 5","nivel 6","nivel 7","nivel 8","nivel 9","nivel 10","nivel 11","nivel 12","nivel 13","nivel 14","nivel 15"]

  constructor(private _CrearEstudianteService: CrearEstudianteService) { }

  ngOnInit(): void {

    if(localStorage.getItem('tipo')=="estudiante"){
      this.tipo="estudiante"
      this.idEstudiante=localStorage.getItem('id')
      console.log(this.idEstudiante)
     } else {
       this.tipo="profesor"
     }


    this._CrearEstudianteService.getEstudiante(this.idEstudiante).subscribe(data => {
      this.trofeos=data.cursos.trofeos


    })

  }

}
