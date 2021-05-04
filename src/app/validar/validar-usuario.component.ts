import { Component, OnInit } from '@angular/core';
import { GestaoDeProcessosApiService } from '../service/gestao-de-processos-api.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-validar-usuario',
  templateUrl: './validar-usuario.component.html',
  styleUrls: ['./validar-usuario.component.css']
})
export class ValidarUsuarioComponent implements OnInit {

  todosUsuarios:any = [];
  formulario: FormGroup;
  pesquisa:Boolean = false;

  constructor(private Api:GestaoDeProcessosApiService,
              private route:Router,
              private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.todosUsuarios = [];
    this.validarUsuario();
    this.formulario = this.formBuilder.group({
      pesquisar:['',]
    });
  }

  ionViewWillEnter(){
    this.validarUsuario();
    this.formulario = this.formBuilder.group({
      pesquisar:['',]
    });
  }

  validarUsuario() {

    if(!this.pesquisa){
      this.Api.getListarUsuarios().subscribe(data =>{
        if(data != null){
          for (let user of data['result']) {
            this.todosUsuarios.push(user);
          }
        }else{
          alert("Erro ao Listar Usuários");
        }
      });
     }
    
  }

  mudarStatus(id:any){
    console.log("opa"+id);
    this.Api.postMudarStatus(id).subscribe((res)=>{
      if(res['success']){
        this.ngOnInit();
      }else{
        alert("Erro Mudar Status!");
      }
    })
  }

  pesquisaPorNome(){
    this.Api.getListarUsuariosFiltro(this.formulario.get('pesquisar').value).subscribe(data =>{
      
      if(data != null){
        this.pesquisa = true;
        for (let user of data['result']) {
          this.todosUsuarios.push(user);
        }
      }else{
        alert("Erro ao Listar Usuários");
      }
    })
  }
    

}
