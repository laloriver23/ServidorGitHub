import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from "./inicio/inicio.component";
import {AyudaComponent} from "./ayuda/ayuda.component";
import {ContactoComponent} from "./contacto/contacto.component";
import {DatosgeneralesComponent} from "./maquetadoformatos/datosgenerales/datosgenerales.component";
import {Formato73Component} from "./maquetadoformatos/formato73/formato73.component";
import {Formato72Component} from "./maquetadoformatos/formato72/formato72.component";
import {Formato71Component} from "./maquetadoformatos/formato71/formato71.component";
import {Formato70Component} from "./maquetadoformatos/formato70/formato70.component";
import {Formato69Component} from "./maquetadoformatos/formato69/formato69.component";

const routes: Routes = [
  {path: 'inicio', component:InicioComponent},
  {path: 'ayuda', component:AyudaComponent},
  {path: 'contacto', component:ContactoComponent},
  {path: 'formato73', component:Formato73Component},
  {path: 'formato72', component:Formato72Component},
  {path: 'formato71', component:Formato71Component},
  {path: 'formato70', component:Formato70Component},
  {path: 'formato69', component:Formato69Component},
  {path: 'datosgenerales', component:DatosgeneralesComponent,
  loadChildren: () => import('./maquetadoformatos/maquetadoformatos.module').then(m => m.MaquetadoformatosModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
