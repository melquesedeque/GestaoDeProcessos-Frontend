import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  formulario: FormGroup;

  constructor(private api:GestaoDeProcessosApiService,
              private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      cpf:['',[Validators.required]],
      competencia:['',[Validators.required]],
      telefone:['',]
    });
  }

  ionViewWillEnter(){
    this.formulario = this.formBuilder.group({
      nome:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      cpf:['',[Validators.required]],
      competencia:['',[Validators.required]],
      telefone:['',]
    });
  }

  registarUsuario(){
    console.log(this.formulario.get('competencia').value.toString());
    return new Promise(resolve => {
      let dados = {
        'nome'        : this.formulario.get('nome').value,
        'email'       : this.formulario.get('email').value,
        'cpf'         : this.formulario.get('cpf').value,
        'competencia' : this.formulario.get('competencia').value.toString(),
        'telefone'    : this.formulario.get('telefone').value,
      };

      this.api.postRegistarUsuario(dados).subscribe((res)=>{
        if(res['success']){
          this.ionViewWillEnter();
        }else{
          console.log("Erro ao Registar");
        }
        resolve(true);
      })
    });
  }


}
