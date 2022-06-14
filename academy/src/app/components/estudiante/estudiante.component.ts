import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {

  saleData = [
    { name: "Biologia", value: 78 },
    { name: "matematicas", value: 50 },
    { name: "fisica", value: 30 },
    { name: "historia", value: 60 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
