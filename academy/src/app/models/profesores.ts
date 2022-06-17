export class Profesor {
  _id?: string;
  nombre: string;
  correo: string;
  edad: number;
  genero: string;
  contrasena: string;
  cursos: any [];
  examenes: any [];

  constructor(nombre:string, correo:string, edad:number, genero:string, contrasena:string, cursos:any[], examenes:any[]) {
    this.nombre=nombre;
    this.correo= correo;
    this.edad=edad;
    this.genero=genero;
    this.contrasena=contrasena;
    this.cursos=cursos;
    this.examenes= examenes;
  }
}

