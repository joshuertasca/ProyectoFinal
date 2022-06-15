import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BarraLateralComponent } from './components/barra-lateral/barra-lateral.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { CursosProfesorComponent } from './components/cursos-profesor/cursos-profesor.component';
import { CursosEstudianteComponent } from './components/cursos-estudiante/cursos-estudiante.component';
import { ExamenesProfesorComponent } from './components/examenes-profesor/examenes-profesor.component';
import { ExamenesEstudianteComponent } from './components/examenes-estudiante/examenes-estudiante.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { TrofeosComponent } from './components/trofeos/trofeos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    BarraLateralComponent,
    EstudiantesComponent,
    EstudianteComponent,
    CursosProfesorComponent,
    CursosEstudianteComponent,
    ExamenesProfesorComponent,
    ExamenesEstudianteComponent,
    EstadisticasComponent,
    TrofeosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
