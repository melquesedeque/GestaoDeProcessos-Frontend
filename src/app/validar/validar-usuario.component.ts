import { Component, OnInit } from '@angular/core';
import { GestaoDeProcessosApiService } from '../service/gestao-de-processos-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validar-usuario',
  templateUrl: './validar-usuario.component.html',
  styleUrls: ['./validar-usuario.component.css']
})
export class ValidarUsuarioComponent implements OnInit {

  todosUsuarios:any = [];

  constructor(private Api:GestaoDeProcessosApiService,
              private route:Router) { }

  ngOnInit(): void {
    this.todosUsuarios = [];
    this.validarUsuario();
    
  }

  ionViewWillEnter(){
    this.todosUsuarios = [];
    this.validarUsuario();
  }

  validarUsuario() {
    this.Api.getListarUsuarios().subscribe(data =>{
      if(data != null){
        for (let user of data['result']) {
          this.todosUsuarios.push(user);
        }
      }else{
        console.log("Erro");
      }
    })
  }

  mudarStatus(id:any){
    console.log("opa"+id);
    this.Api.postMudarStatus(id).subscribe((res)=>{
      if(res['success']){
        this.ngOnInit();
      }else{
        console.log("Erro Mudar Status");
      }
    })
  }
    

}
