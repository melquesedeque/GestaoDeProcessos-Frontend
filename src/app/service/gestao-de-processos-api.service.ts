import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders, HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class GestaoDeProcessosApiService {

    public serverApi: string = "http://127.0.0.1:8000/api/";

    constructor(private http : HttpClient){}

    getListarUsuarios(){
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };

        let urlCompleta = this.serverApi + 'listarUsuarios';
        return this.http.get(urlCompleta, httpOptions).map(res => res);
    }

    getListarUsuariosFiltro(nome:string){
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };

        let urlCompleta = this.serverApi + 'filtrarPorNome/'+nome;
        return this.http.get(urlCompleta, httpOptions);
    }

    postMudarStatus(id:number){
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };

        let urlCompleta = this.serverApi + 'mudarStatus/'+id;
        return this.http.post(urlCompleta, httpOptions);
    }

    postRegistarUsuario(dados: any){
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };

        let urlCompleta = this.serverApi + 'registarUsuario';
        return this.http.post(urlCompleta, JSON.stringify(dados), httpOptions);
    }


}
