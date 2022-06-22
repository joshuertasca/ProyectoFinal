import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudiante } from 'src/app/models/estudiantes';
import { CrearEstudianteService } from 'src/app/services/crear-estudiante.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {


  listaestudiantes:any;
  TituloDelComponente:any;
  hombres:any=0;
  mujeres:any=0;

  single = [
    {
      "name": "Hombres",
      "value": 5
    },
    {
      "name": "Mujeres",
      "value": 5
    }
  ];

  trofeos:any=[
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    }
  ];

  constructor(private router: Router, private _CrearEstudianteService: CrearEstudianteService,  private idRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.TituloDelComponente="EStadisticas de los Estudiantes"
    if (localStorage.getItem('tipo')!='profesor') {
      this.router.navigate([''])
    }
    this.llamarinformacion()
  }

  llamarinformacion(){
    this._CrearEstudianteService.getEstudiantes().subscribe(data=>{
      console.log(data)
      this.listaestudiantes= data;

      data.forEach((element:any) => {
        if (element.genero=="hombre") {
        this.hombres++
      }else{
          this.mujeres++
        }
      });

      let cantidadtrofeos:any = []
      let nombres:any=[];
      data.forEach((element:any, indice:any) => {
        cantidadtrofeos[indice]=0
        nombres[indice]=element.nombre
        let trofeos:any = element.cursos.trofeos
        trofeos.forEach((element:any) => {
          if (element) {
            cantidadtrofeos[indice]++
          }
        });
      });

      console.log(cantidadtrofeos)
      console.log(nombres)
      let contenidografica:any= []

      nombres.forEach((element:any, indice:any) => {

        contenidografica.push({"name": element,
        "value": cantidadtrofeos[indice]})
      });

      this.single = [
        {
          "name": "Hombres",
          "value": this.hombres
        },
        {
          "name": "Mujeres",
          "value": this.mujeres
        }
      ];



     this.trofeos= contenidografica;


    });
  }

}
