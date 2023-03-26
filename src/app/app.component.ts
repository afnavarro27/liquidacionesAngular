import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrabajadorService } from './services/trabajador/trabajador.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  trabajadorForm: FormGroup;

  constructor(public fb: FormBuilder, public trabajadorService: TrabajadorService) {
    this.trabajadorForm = this.fb.group({})
  }

  ngOnInit(): void {
    this.trabajadorForm = this.fb.group({
      cedula: [, [Validators.required]],
      nombreTrabajador: ['', [Validators.required]],
      diasLaborados: [, [Validators.required]],
      auxilioTransporte: [, [Validators.required]],
      sueldoTrabajador: [, [Validators.required]]
    })
  }

  public guardar(body:any): void {
    this.trabajadorService.saveTrabajador(body).subscribe(res => {
    },
    error => (console.error(error)))
  }
}
