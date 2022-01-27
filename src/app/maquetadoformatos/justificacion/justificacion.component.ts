// @ts-ignore

import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-justificacion',
  templateUrl: './justificacion.component.html',
  styleUrls: ['./justificacion.component.scss']
})
export class JustificacionComponent implements OnInit {
  Formjustificacion = new FormGroup({
    justificacion: new FormControl('',[Validators.required,Validators.required,Validators.minLength(2),Validators.maxLength(5)]),
  });
  constructor() { }

  ngOnInit(): void {
  }

  get justificacion(): any {
    return  this.Formjustificacion.get('justificacion');
  }


  imprime(){console.log(this.Formjustificacion.value)};


}
