
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-formato70',
  templateUrl: './formato70.component.html',
  styleUrls: ['./formato70.component.scss']
})
export class Formato70Component implements OnInit {
  formdatos: FormGroup;
  // constructor() { }
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {

    this.formdatos = this.fb.group({
      clave: ['', Validators.required],
      nombre: ['', Validators.required],
      texto: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      cedula: [''],
      fechanacimiento: ['', Validators.required],
      telefono: [''],
    })

  }



  agregar()
  {
    console.log(this.formdatos.value)
  }

}
/*export class formato70Component implements OnInit {
  formdatos: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formdatos = this.fb.group({
      clave: ['', Validators.required],
      nombre: ['', Validators.required],
      texto: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      cedula: [''],
      fechanacimiento: ['', Validators.required],
      telefono: [''],
    })
  }

  agregar()
  {
    console.log(this.formdatos.value)
  }

}
*/

/*
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formato70',
  templateUrl: './formato70.component.html',
  styleUrls: ['./formato70.component.scss']
})
export class Formato70Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
*/



/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formato70',
  templateUrl: './formato70.component.html',
  styleUrls: ['./formato70.component.scss']
})
export class Formato70Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
*/
