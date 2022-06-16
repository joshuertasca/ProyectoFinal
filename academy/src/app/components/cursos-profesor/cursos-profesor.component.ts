import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cursos-profesor',
  templateUrl: './cursos-profesor.component.html',
  styleUrls: ['./cursos-profesor.component.css']
})
export class CursosProfesorComponent implements OnInit {

  cursos: any = [
    {
      "nombre": "biologia",
      "contenido": [
        {
          "tipo": "texto",
          "nombre": "ciclo del Agua",
          "informacion": "El ciclo hidrológico comienza con la evaporación del agua desde la superficie del océano. A medida que se eleva, el aire humedecido se enfría y el vapor se transforma en agua: es la condensación. Las gotas se juntan y forman una nube. Luego, caen por su propio peso: es la precipitación."
        },
        {
          "tipo": "imagen",
          "nombre": "ciclo del Agua 2",
          "informacion": "https://www.educapeques.com/wp-content/uploads/2016/05/ciclo-del-agua.jpg"
        },
        ,
        {
          "tipo": "video",
          "nombre": "ciclo del Agua 3",
          "informacion": "https://www.youtube.com/watch?v=ITauNE9YNdE"
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }


  addImagen(){


  }
  addVideo(){


  }
  addTexto(){


  }



}
