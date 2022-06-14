import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { GraficaComponent } from './components/grafica/grafica.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'estudiantes', component: EstudiantesComponent},
  { path: 'grafica', component: GraficaComponent},
  { path: 'estudiante/:id', component: EstudianteComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
