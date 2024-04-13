import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PrivadoComponent } from './pages/privado/privado.component';
import { RegistroComponent } from './components/registro/registro.component';
import { loginGuard } from './guards/login.guard';

const routes: Routes = [
  { path:'home', component:HomeComponent},
  { path:'login', component: LoginComponent },
  { path: 'privado', component:PrivadoComponent, canActivate:[loginGuard] },
  { path: 'registro', component:RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
