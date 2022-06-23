import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';  //con O mayusculas
import {Estudiante} from 'src/app/models/estudiantes'

@Injectable({
  providedIn: 'root'
})
export class CrearEstudianteService {

  url = "http://localhost:4001/"   // la url de la api

  constructor( private http: HttpClient ) { }   // httpclient se encarga de alimentar el parametro

  getEstudiantes (): Observable<any>{     // vaya al contedido vuelvalo asincrono y conviertaalo en un tipo any
    return this.http.get(this.url+"obtener-lista-estudiantes")
  }

  getEstudiantesProfesor (correoProfesor:any): Observable<any>{     // vaya al contedido vuelvalo asincrono y conviertaalo en un tipo any
    return this.http.get(this.url+"estudiantecorreoprofesor/"+ correoProfesor)
  }

  getEstudiante (id:string): Observable<any>{     // vaya al contedido vuelvalo asincrono y conviertaalo en un tipo any
    return this.http.get(this.url +"estudiante/"+ id)
  }

  deleteEstudiante (id:string) : Observable<any>  {
    return this.http.delete(this.url+"delete-estudiante/"+id)
  }

  getEstudiantecorreo (estudiante:string): Observable<any>{     // vaya al contedido vuelvalo asincrono y conviertaalo en un tipo any
    return this.http.get(this.url +"estudiantecorreo/"+ estudiante)
  }

  postContacto (estudiante: Estudiante):Observable<any>{
    return this.http.post(`${this.url}crear-cuenta-estudiante`, estudiante)
  }

  putEstudiante(id:string , estudiante: Estudiante): Observable <any> {
    return this.http.put(this.url+"actualizar-estudiante/"+id, estudiante)
  }

}


