import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { MenuinicioComponent } from './menuinicio/menuinicio.component';
import { AccesoComponent } from './acceso/acceso.component';
import { RecuperarComponent } from './recuperar/recuperar.component';
import { RegistrarComponent } from './registrar/registrar.component';


@NgModule({
    declarations: [
        MenuinicioComponent,
        AccesoComponent,
        RecuperarComponent,
        RegistrarComponent
    ],
  exports: [
    AccesoComponent,
    MenuinicioComponent,
    RecuperarComponent,
    RegistrarComponent
  ],
    imports: [
        CommonModule,
        LoginRoutingModule
    ]
})
export class LoginModule { }
