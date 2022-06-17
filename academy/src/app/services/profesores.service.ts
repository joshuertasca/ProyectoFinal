import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';  //con O mayusculas
import { Profesor } from '../models/profesores';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {

  url = "http://localhost:4001/"   // la url de la api

  constructor( private http: HttpClient ) { }   // httpclient se encarga de alimentar el parametro

  getProfesores (): Observable<any>{     // vaya al contedido vuelvalo asincrono y conviertaalo en un tipo any
    return this.http.get(this.url+"obtener-lista-profesores")
  }

  getProfesor (id:string): Observable<any>{     // vaya al contedido vuelvalo asincrono y conviertaalo en un tipo any
    return this.http.get(this.url +"profesor/"+ id)
  }

  postProfesor (profesor: Profesor):Observable<any>{
     return this.http.post(`${this.url}crear-cuenta-profesor`, profesor)
  }

  putContacto(id:string , profesor: Profesor): Observable <any> {
    return this.http.put(this.url+"actualizar-profesor/"+id, profesor)
  }

}
