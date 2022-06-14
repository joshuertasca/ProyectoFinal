import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudiante } from 'src/app/models/estudiantes';
import { CrearEstudianteService } from 'src/app/services/crear-estudiante.service';


@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  registroEstudiantes: FormGroup;
  regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  regexNumero = /^[0-9]+$/;
  listaEstudiantes: Estudiante []= [];
  id: string | null;

  constructor(private fb: FormBuilder, private _CrearEstudianteService: CrearEstudianteService, private router: Router, private idRouter: ActivatedRoute) {

    this.registroEstudiantes = this.fb.group({
      nombre: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.pattern(this.regexCorreo)]],
      edad: ['', [Validators.required],Validators.pattern(this.regexNumero)],
      genero: ['', [Validators.required]],
      contrasena: ['', [Validators.required, Validators.minLength(5)]],
  })

  this.id = this.idRouter.snapshot.paramMap.get('id')

  }

  ngOnInit(): void {
    this.obtenerEstudiantes()
  }

  obtenerEstudiantes() {
    this._CrearEstudianteService.getEstudiantes().subscribe(data=>{
      console.log(data)
      this.listaEstudiantes= data;
    });
  }

  guardarEstudiante() {
    //console.log(this.registroForm);

    const registroEstudiantes: Estudiante = {
      nombre: this.registroEstudiantes.get('nombre')?.value,
      correo: this.registroEstudiantes.get('correo')?.value,
      edad: this.registroEstudiantes.get('edad')?.value,
      genero: this.registroEstudiantes.get('genero')?.value,
      contrasena: this.registroEstudiantes.get('contrasena')?.value,
      correoProfesor: "fulano@gmail.com",
      cursos:{}
    }

        this._CrearEstudianteService.postContacto(registroEstudiantes).subscribe(data => {


        }, error => {
            console.log(error);
        })


}

}
