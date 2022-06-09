import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

loginForm: FormGroup;
modalForm: FormGroup;
regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
regexNumero = /^[0-9]+$/;
regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;

constructor(private fb: FormBuilder) {
    this.loginForm=this.fb.group({
      Email:["", [Validators.required, Validators.pattern(this.regexEmail)]],
      Password:["",[Validators.required, Validators.pattern(this.regexPassword)]]


    })

    this.modalForm=this.fb.group({
      Nombre:["",Validators.required],
      Edad:["", [Validators.required, Validators.pattern(this.regexNumero)]],
      SetPassword:["",[Validators.required, Validators.pattern(this.regexPassword)]],
      SetEmail:["", [Validators.required, Validators.pattern(this.regexEmail)]],

    })




  }






  ngOnInit(): void {
  }
  alimentarContacto(){
      console.log(this.loginForm)
  }

}
