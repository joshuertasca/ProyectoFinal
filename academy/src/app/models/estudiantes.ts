export class Estudiante {
  _id?: string;
  nombre: string;
  correo: string;
  edad:number;
  genero: string;
  correoProfesor: string;
  contrasena: string;
  cursos: object;

  constructor(nombre:string, correo:string, genero:string, edad:number, usuarioProfesor:string, contrasena:string, cursos:object) {
    this.nombre=nombre;
    this.correo = correo;
    this.edad=edad;
    this.genero = genero;
    this.correoProfesor = usuarioProfesor;
    this.contrasena=contrasena;
    this.cursos=cursos;

  }

}
