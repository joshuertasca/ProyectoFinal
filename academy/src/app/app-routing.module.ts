import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearExamenComponent } from './components/crear-examen/crear-examen.component';
import { CursosEstudianteComponent } from './components/cursos-estudiante/cursos-estudiante.component';
import { CursosProfesorComponent } from './components/cursos-profesor/cursos-profesor.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { ExamenesEstudianteComponent } from './components/examenes-estudiante/examenes-estudiante.component';
import { ExamenesProfesorComponent } from './components/examenes-profesor/examenes-profesor.component';
import { LoginComponent } from './components/login/login.component';
import { TrofeosComponent } from './components/trofeos/trofeos.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'estudiantes', component: EstudiantesComponent},
  { path: 'estudiante/:id', component: EstudianteComponent},
  { path: 'cursosProfesor', component: CursosProfesorComponent},
  { path: 'cursosEstudiante/:indice', component: CursosEstudianteComponent},
  { path: 'examenesProfesor', component: ExamenesProfesorComponent},
  { path: 'estadisticas', component: EstadisticasComponent},
  { path: 'trofeos', component: TrofeosComponent},
  { path: 'crearExamen', component: CrearExamenComponent},
  { path: 'examen/:indice', component: ExamenesEstudianteComponent},
  { path: '**', redirectTo: '', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
