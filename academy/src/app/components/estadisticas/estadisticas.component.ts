import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {

  single = [
    {
      "name": "Hombres",
      "value": 12
    },
    {
      "name": "Mujeres",
      "value": 5
    }
  ];

  multi = [
    {
      "name": "biologia",
      "series": [
        {
          "name": "hombres",
          "value": 73
        },
        {
          "name": "mujeres",
          "value": 59
        },
        {
          "name": "general",
          "value": 63
        }
      ]
    },

    {
      "name": "matematicas",
      "series": [
        {
          "name": "hombres",
          "value": 78
        },
        {
          "name": "mujeres",
          "value": 70
        },
        {
          "name": "general",
          "value": 74
        }
      ]
    },

    {
      "name": "Fisica",
      "series": [
        {
          "name": "hombres",
          "value": 50
        },
        {
          "name": "mujeres",
          "value": 58
        },
        {
          "name": "general",
          "value": 55
        }
      ]
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
