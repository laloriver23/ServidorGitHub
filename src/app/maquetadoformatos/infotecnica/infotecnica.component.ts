import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-infotecnica',
  templateUrl: './infotecnica.component.html',
  styleUrls: ['./infotecnica.component.scss']
})
export class InfotecnicaComponent implements OnInit {
  Forminfotecnica = new FormGroup({
    infotecnica: new FormControl('',[Validators.required,Validators.required,Validators.minLength(2),Validators.maxLength(5)]),
  });

  constructor() { }

  ngOnInit(): void {
  }

  get infotecnica(): any {
    return  this.Forminfotecnica.get('infotecnica');
  }

  imprime(){console.log(this.Forminfotecnica.value)};

}
