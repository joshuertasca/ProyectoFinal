import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CursoComponent } from './components/curso/curso.component';


const routes: Routes = [
  {path: "", component:LoginComponent},
  {path:"curso", component:CursoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
