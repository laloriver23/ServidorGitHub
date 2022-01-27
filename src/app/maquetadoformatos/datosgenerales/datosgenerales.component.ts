import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";



@Component({
  selector: 'app-datosgenerales',
  templateUrl: './datosgenerales.component.html',
  styleUrls: ['./datosgenerales.component.scss']
})
export class DatosgeneralesComponent implements OnInit {
  FormDatosGenerales = new FormGroup({
    clave: new FormControl('',[Validators.required,Validators.required,Validators.minLength(2),Validators.maxLength(5)]),
    periodo: new FormControl(''),
    nombreproyecto: new FormControl('',[Validators.required,Validators.required,Validators.minLength(2),Validators.maxLength(5)]),
    programas: new FormControl(''),
    area: new FormControl(''),
    lineainvestigacion: new FormControl(''),
    nivelacademico: new FormControl(''),
    txt: new FormControl('',[Validators.required,Validators.required,Validators.minLength(2),Validators.maxLength(5)]),
    nombrecoordinador: new FormControl('',[Validators.required,Validators.required,Validators.minLength(2),Validators.maxLength(5)]),
    cargo: new FormControl(''),
    telefono: new FormControl('',[Validators.required,Validators.required,Validators.minLength(2),Validators.maxLength(5)]),
  });

  FormPeriodo = ['2020-1','2020-2', '2021-1','2022-2', '2023-1','2023-2','2024-1','2024-2','2025-1','2025-2'];
  FormDivisiones = [
    'División de Ingeniería Química y Bioquímica',
    'División de Ingeniería Bioquímica',
    'División de Ingeniería en Sistemas Computacionales',
    'División de Ingeniería Informatica',
    'División de Ingeniería Mecánica',
    'División de Ingeniería Mecatrónica',
    'División de Ingeniería Industrial',
    'División de Ingeniería Electrónica',
    'División de Contaduría Pública',
    'División de Ingeniería Aeronáutica',
    'División de Ingeniería en Gestión Empresarial',

  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  get clave(): any {
    return  this.FormDatosGenerales.get('clave');
  }

  get periodo(): any {
    return  this.FormDatosGenerales.get('clave');
  }
  get divisiones(): any {
    return  this.FormDatosGenerales.get('clave');
  }


  get nombreproyecto(): any {
    return  this.FormDatosGenerales.get('nombreproyecto');
  }

  get programas(): any {
    return  this.FormDatosGenerales.get('programas');
  }

  get area(): any {
    return  this.FormDatosGenerales.get('area');
  }

  get lineainvestigacion(): any {
    return  this.FormDatosGenerales.get('lineainvestigacion');
  }

  get nivelacademico(): any {
    return  this.FormDatosGenerales.get('nivelacademico');
  }

  get txt(): any {
    return  this.FormDatosGenerales.get('txt');
  }

  get nombrecoordinador(): any {
    return  this.FormDatosGenerales.get('nombrecoordinador');
  }

  get cargo(): any {
    return  this.FormDatosGenerales.get('cargo');
  }

  get telefono(): any {
    return  this.FormDatosGenerales.get('telefono');
  }

  imprime(){console.log(this.FormDatosGenerales.value)};
}






