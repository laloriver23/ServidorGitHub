import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.scss']
})
export class CuerpoComponent implements OnInit {
  formato = new FormGroup({
    oficio: new FormControl('Captura tu numero de oficio'),
    clave: new FormControl('Capture la clave'),
    nomdocalu: new FormControl('Capture el nombre del docente o alumno')

  });
  constructor() { }

  ngOnInit(): void {
  }

}
