import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudiante } from 'src/app/models/estudiantes';
import { CrearEstudianteService } from 'src/app/services/crear-estudiante.service';
import Swal from 'sweetalert2';


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
  TituloDelComponente:any;
  correoProfesor:any;

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

    this.correoProfesor= localStorage.getItem('correo')
    if (localStorage.getItem('tipo')!='profesor') {
      this.router.navigate([''])
    }
    this.obtenerEstudiantes()
    this.TituloDelComponente="Lista de Estudiantes"
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
      correoProfesor: this.correoProfesor,
      cursos:{
        "contenido": [{}],
        "calificaciones": [{}],
        "trofeos": [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false
        ]
    }

  }

        this._CrearEstudianteService.postContacto(registroEstudiantes).subscribe(data => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Un Nuevo estudiante ha sido registrado',
            showConfirmButton: false,
            timer: 1500
        })
window.location.reload();

        }, error => {
            console.log(error);
        })


}

}
