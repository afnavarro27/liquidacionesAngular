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
  trabajadorForm: FormGroup;
  public urlCargarTrabajadores = `http://localhost:8090/trabajador/trabajadores`;
  public urlCargarTercerTrabajador = `http://localhost:8090/trabajador/listarTercerTrabajador`;

  constructor(private trabajadorService:TrabajadorService,public fb: FormBuilder){
    this.trabajadorForm = this.fb.group({})
  }
  
  ngOnInit(): void {
    this.tercerTrabaja()
    this.cargarTrabaja();
    
    this.trabajadorForm = this.fb.group({
      cedula: [, [Validators.required]],
      nombreTrabajador: ['', [Validators.required]],
      diasLaborados: [, [Validators.required]],
      auxilioTransporte: [, [Validators.required]],
      sueldoTrabajador: [, [Validators.required]]
    })
  }
  
  public cargarTrabaja(){
    this.trabajadorService.get(this.urlCargarTrabajadores)
    .subscribe(trabajadores =>{
      this.listTrabjadores = trabajadores;
    },
    error =>{console.error(error)})
  }
  
  public tercerTrabaja(){
    this.trabajadorService.getTercerTrabajador(this.urlCargarTercerTrabajador)
    .subscribe((trabajador:any) =>{
      this.tertrabaja = trabajador;
    })
  }

  public guardar(body:any): void {
    this.trabajadorService.saveTrabajador(body).subscribe(res => {
    },
    error => (console.error(error)))
  }

}
