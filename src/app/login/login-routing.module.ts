import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccesoComponent} from "./acceso/acceso.component";
import {RegistrarComponent} from "./registrar/registrar.component";
import {RecuperarComponent} from "./recuperar/recuperar.component";

const routes: Routes = [
  {
  path: '',
      children:[
  {path: 'acceso', component: AccesoComponent},
  {path: './recuperar', component: RecuperarComponent},
  {path: 'registrar', component: RegistrarComponent},
        {path: 'registrar', component: RegistrarComponent,
        loadChildren: () => import('./login.module').then(m => m.LoginModule)},
      ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
