import { Component, ElementRef, OnInit, ViewChild, Renderer2, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profesor } from 'src/app/models/profesores';
import { ProfesoresService } from 'src/app/services/profesores.service';
import Swal from 'sweetalert2';
import { Estudiante } from 'src/app/models/estudiantes';
import { CrearEstudianteService } from 'src/app/services/crear-estudiante.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


  @ViewChild('alerta') alertaHTML?: ElementRef

  loginForm: FormGroup;
  modalForm: FormGroup;
  regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
  regexNumero = /^[0-9]+$/;
  // regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;

  constructor(private fb: FormBuilder, private _ProfesoresService: ProfesoresService, private _CrearEstudianteService: CrearEstudianteService, private renderer2: Renderer2, private router: Router, private idRouter: ActivatedRoute) {
    this.loginForm = this.fb.group({
      Email: ["", [Validators.required, Validators.pattern(this.regexEmail)]],
      // Password: ["", [Validators.required, Validators.pattern(this.regexPassword)]],
      Password: ["", [Validators.required]],
      tipo: ["", []]
    })

    this.modalForm = this.fb.group({
      Nombre: ["", Validators.required],
      genero: ["", Validators.required],
      Edad: ["", [Validators.required, Validators.pattern(this.regexNumero)]],
      SetPassword: ["", [Validators.required]],
      SetEmail: ["", [Validators.required, Validators.pattern(this.regexEmail)]],

    })




  }


  ngOnInit(): void {

    if (localStorage.getItem('tipo')=='estudiante') {
      this.router.navigate(['estudiante/'+localStorage.getItem('id')])
    }
    if (localStorage.getItem('tipo')=='profesor') {
      this.router.navigate(['estudiantes'])
    }

  }


  alimentarContacto() {

    // console.log("hola")
    // console.log(this.modalForm)
  }

  ingresar(tipo: any) {
    const alerta = this.alertaHTML?.nativeElement;
    console.log(this.loginForm.value)
    this.renderer2.setProperty(alerta, 'innerHTML', 'No se encuentran el correo registrado');
    if (this.loginForm.value.tipo == true) {
      console.log("profesor")

      this._ProfesoresService.getProfesorcorreo(this.loginForm.value.Email).subscribe(data => {
        if (data[0].correo!=null) {
          this.renderer2.setProperty(alerta, 'innerHTML', '');
        }
        if (this.loginForm.value.Password == data[0].contrasena) {
          console.log("datos correctos")
          //hacer cuando se registra bien un profesor
          localStorage.setItem('id',data[0]._id);
          localStorage.setItem('correo',data[0].correo);
          localStorage.setItem('nombre',data[0].nombre);
          localStorage.setItem('tipo',"profesor");
          localStorage.getItem('tipo1');

          this.router.navigate(['estudiantes'])

        }
        else {
          this.renderer2.setProperty(alerta, 'innerHTML', 'La contraseña es incorrecta');
        }
        console.log("hola "+this.loginForm.value.Email)
      });


    } else {
      console.log("estudiante")
      this._CrearEstudianteService.getEstudiantecorreo(this.loginForm.value.Email).subscribe(data => {
        if (data[0].correo!=null) {
          this.renderer2.setProperty(alerta, 'innerHTML', '');
        }
        if (this.loginForm.value.Password == data[0].contrasena) {
          console.log("datos correctos")
          //hacer cuando se registra bien un estudiante
          let NumeroTrofeos:any;
          let premios = data.cursos.trofeos;
        console.log(premios)
        for (let index:any = 0; index < 15; index++) {
          console.log(premios[index])
          if (premios[index]==true) {
            NumeroTrofeos=NumeroTrofeos+1;
          }
        }

          localStorage.setItem('id',data[0]._id);
          localStorage.setItem('correo',data[0].correo);
          localStorage.setItem('nombre',data[0].nombre);
          localStorage.setItem('correoprofesor',data[0].correoProfesor);
          localStorage.setItem('tipo',"estudiante");

          this.router.navigate(['estudiante/'+localStorage.getItem('id')])
        }
        else {
          this.renderer2.setProperty(alerta, 'innerHTML', 'La contraseña es incorrecta');
          console.log("datos incorrectoss")
        }

      })

    }



  }
}
