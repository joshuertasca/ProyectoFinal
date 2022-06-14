export class Profesor {
  _id?: string;
  correo: string;
  nombre: string;
  genero: string;
  contrasena: string;
  acepta_terminos: boolean;
  estudiantes: object;

  constructor(correo:string, nombre:string, genero:string, contrasena:string, acepta_terminos:boolean, estudiantes:object) {
    this.correo= correo;
    this.nombre=nombre;
    this.genero=genero;
    this.contrasena=contrasena;
    this.acepta_terminos=acepta_terminos;
    this.estudiantes= Object;
  }
}

