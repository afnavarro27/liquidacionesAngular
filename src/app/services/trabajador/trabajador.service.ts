import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable, OnInit } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class TrabajadorService {

  private apiTraba = 'http://localhost:8090/trabajador/creartrabajador'

  constructor(private httpClient: HttpClient,) { }

  public get(url: string){
    return this.httpClient.get(url)
  }

  public saveTrabajador(trabajador: any):Observable<any>{
    return this.httpClient.post(this.apiTraba , trabajador);
  }

  public getTercerTrabajador(url: string){
    return this.httpClient.get(url)
  }

}
