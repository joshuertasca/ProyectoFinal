import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

contactoForm: FormGroup;
regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
regexNumero = /^[0-9]+$/;

constructor(private fb: FormBuilder) {
    this.contactoForm=this.fb.group({
      Nombre:["",Validators.required],
      Edad:["", [Validators.required, Validators.pattern(this.regexNumero)]],
      Celular:["",[Validators.required, Validators.pattern(this.regexNumero)]],
      Email:["", [Validators.required, Validators.pattern(this.regexEmail)]],


    })
  }

  ngOnInit(): void {
  }
  alimentarContacto(){
      console.log(this.contactoForm)
  }

}
