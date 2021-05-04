import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RegistrarUsuarioComponent } from './registrar/registrar-usuario.component';
import { GestaoDeProcessosApiService } from './service/gestao-de-processos-api.service';
import { ValidarUsuarioComponent } from './validar/validar-usuario.component';
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    RegistrarUsuarioComponent,
    ValidarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    GestaoDeProcessosApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
