import { Component, OnInit } from '@angular/core';
import { GestaoDeProcessosApiService } from '../service/gestao-de-processos-api.service';

@Component({
  selector: 'app-validar-usuario',
  templateUrl: './validar-usuario.component.html',
  styleUrls: ['./validar-usuario.component.css']
})
export class ValidarUsuarioComponent implements OnInit {

  todosUsuarios:any = [];

  constructor(private Api:GestaoDeProcessosApiService) { }

  ngOnInit(): void {
    this.todosUsuarios = [];
    this.validarUsuario();
    this.mudarStatus(1);
  }

  ionViewWillEnter(){
    this.todosUsuarios = [];
    this.validarUsuario();
    this.mudarStatus(1);
  }

  validarUsuario() {
    this.Api.getListarUsuarios().subscribe((res)=>{
      if(res != null){
        this.todosUsuarios.push(res);
        console.log("Sucesso",this.todosUsuarios);
      }else{
        console.log("Erro");
      }
    });
  }

  mudarStatus(id:any){
    this.Api.postMudarStatus(id).subscribe((res)=>{
      if(res['success']){
        console.log("Sucesso Mudar Status");
      }else{
        console.log("Erro Mudar Status");
      }
    })
  }
    

}
