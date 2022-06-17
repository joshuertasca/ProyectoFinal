import { Component, ElementRef, OnInit, ViewChild, Renderer2, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  preguntas: any = [{
    pregunta: "¿ de que color es el agua?",
    opciona: "amarilla",
    opcionb: "transparente",
    opcionc: "azul",
    opciond: "no tiene color",
    respuesta: "d"
  },
  {
    pregunta: "¿ scvjks skcokrdzfkdmckjdbfskjnxjasnzdvc?",
    opciona: "amasdfcrilla",
    opcionb: "sdrfwaes",
    opcionc: "edfsxc",
    opciond: "sfdcads",
    respuesta: "a"
  }
  ]



  constructor(private renderer2: Renderer2, private router: Router, private idRouter: ActivatedRoute) { }

  ngOnInit(): void {
  }

  guardarpregunta(pregunta: any, opciona: any, opcionb: any, opcionc: any, opciond: any, respuesta: any) {
    const advertencia = this.advHTML?.nativeElement;

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
        this.input1.nativeElement.value = ' ';
        this.input2.nativeElement.value = ' ';
        this.input3.nativeElement.value = ' ';
        this.input4.nativeElement.value = ' ';
        this.input5.nativeElement.value = ' ';
        this.input6.nativeElement.value = ' ';
        this.renderer2.setProperty(advertencia, 'innerHTML', '')
      } else {

        this.renderer2.setProperty(advertencia, 'innerHTML', 'la respuesta solo puede ser a,b,c o d (en minuscula)')
      }
    }

    console.log(this.preguntas)
  }












}
