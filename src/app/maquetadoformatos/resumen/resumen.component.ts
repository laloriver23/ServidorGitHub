import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.scss']
})
export class ResumenComponent implements OnInit {
  Formresumen = new FormGroup({
    resumen: new FormControl('',[Validators.required,Validators.required,Validators.minLength(2),Validators.maxLength(5)]),
  });
  constructor() { }

  ngOnInit(): void {
  }

  get resumen(): any {
    return  this.Formresumen.get('resumen');
  }

  imprime(){console.log(this.Formresumen.value)};

}
