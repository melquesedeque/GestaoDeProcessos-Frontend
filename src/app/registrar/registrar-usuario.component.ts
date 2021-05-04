import { Component, OnInit } from '@angular/core';
import { GestaoDeProcessosApiService } from '../service/gestao-de-processos-api.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  nome:string;
  cpf:string;
  email:string;
  competencias:string [];
  telefone:string;

  constructor(private api:GestaoDeProcessosApiService) { }

  ngOnInit(): void {
    this.registarUsuario();
  }

  ionViewWillEnter(){
    this.registarUsuario();
  }

  registarUsuario(){
    return new Promise(resolve => {
      let dados = {
        'nome'        : 'melque',
        'email'       : 'mel@mel.com',
        'cpf'         : '11343600001',
        'competencia' : 'opa',
        'telefone'    : '8299108039',
      };

      this.api.postRegistarUsuario(dados).subscribe((res)=>{
        if(res['success']){
          console.log("Sucesso ao Registar");
        }else{
          console.log("Erro ao Registar");
        }
        resolve(true);
      })
    });
  }


}
