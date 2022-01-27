import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BienesmueblesComponent} from "./bienesmuebles/bienesmuebles.component";
import {CronogramaComponent} from "./cronograma/cronograma.component";
import {CurriculumvitaeComponent} from "./curriculumvitae/curriculumvitae.component";
import {JustificacionComponent} from "./justificacion/justificacion.component";
import {HonorariosComponent} from "./honorarios/honorarios.component";
import {InfotecnicaComponent} from "./infotecnica/infotecnica.component";
import {RecursosmaterialesComponent} from "./recursosmateriales/recursosmateriales.component";
import {ResumenComponent} from "./resumen/resumen.component";
import {ResumenderecursosComponent} from "./resumenderecursos/resumenderecursos.component";
import {ServiciosComponent} from "./servicios/servicios.component";
import {ErrorComponent} from "./error/error.component";
import {DatosgeneralesComponent} from "./datosgenerales/datosgenerales.component";


const routes: Routes = [
  {
  path:'',
    children:[
      {path: 'datosgenerales/justificacion', component: JustificacionComponent},
      {path: 'resumen', component: ResumenComponent},
      {path: 'infotecnica', component: InfotecnicaComponent},
      {path: 'cronograma', component: CronogramaComponent},
      {path: 'honorarios', component: HonorariosComponent},
      {path: 'recursosmateriales', component: RecursosmaterialesComponent},
      {path: 'servicios', component: ServiciosComponent},
      {path: 'bienesmuebles', component: BienesmueblesComponent},
      {path: 'resumenderecursos', component: ResumenderecursosComponent},
      {path: 'curriculum', component: CurriculumvitaeComponent},

]}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaquetadoformatosRoutingModule { }
