import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrabajadorService } from '../services/trabajador/trabajador.service';


@Component({
  selector: 'app-trabajador',
  templateUrl: './trabajador.component.html',
  styleUrls: ['./trabajador.component.css']
})
export class TrabajadorComponent implements OnInit{

  public listTrabjadores:any;
  public tertrabaja:any;

  constructor(private trabajadorService:TrabajadorService){
  }
  
  ngOnInit(): void {
    this.tercerTrabaja()
    this.cargarTrabaja();
    
  }
  
  public cargarTrabaja(){
    this.trabajadorService.get(`http://localhost:8090/trabajador/trabajadores`)
    .subscribe(trabajadores =>{
      this.listTrabjadores = trabajadores;
    },
    error =>{console.error(error)})
  }
  
  public tercerTrabaja(){
    this.trabajadorService.getTercerTrabajador(`http://localhost:8090/trabajador/listarTercerTrabajador`)
    .subscribe((trabajador:any) =>{
      this.tertrabaja = trabajador;
    })
  }

}
