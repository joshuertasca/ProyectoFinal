import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GraficaComponent } from './components/grafica/grafica.component';
import { BarraLateralComponent } from './components/barra-lateral/barra-lateral.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EstudianteComponent } from './components/estudiante/estudiante.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    GraficaComponent,
    BarraLateralComponent,
    EstudiantesComponent,
    EstudianteComponent
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
