import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValidarUsuarioComponent } from "./validar/validar-usuario.component";
import { RegistrarUsuarioComponent } from "./registrar/registrar-usuario.component";

const routes: Routes = [
  //Access default
  { path: ':nome/registar', component:  RegistrarUsuarioComponent},
  { path: ':nome/validar', component:  ValidarUsuarioComponent}, 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

