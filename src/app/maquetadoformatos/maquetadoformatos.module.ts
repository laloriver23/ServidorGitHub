import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaquetadoformatosRoutingModule } from './maquetadoformatos-routing.module';
import { DatosgeneralesComponent } from './datosgenerales/datosgenerales.component';
import { JustificacionComponent } from './justificacion/justificacion.component';
import { ResumenComponent } from './resumen/resumen.component';
import { InfotecnicaComponent } from './infotecnica/infotecnica.component';
import { CronogramaComponent } from './cronograma/cronograma.component';
import { HonorariosComponent } from './honorarios/honorarios.component';
import { RecursosmaterialesComponent } from './recursosmateriales/recursosmateriales.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { BienesmueblesComponent } from './bienesmuebles/bienesmuebles.component';
import { ResumenderecursosComponent } from './resumenderecursos/resumenderecursos.component';
import { CurriculumvitaeComponent } from './curriculumvitae/curriculumvitae.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ErrorComponent } from './error/error.component';
import { Formato73Component } from './formato73/formato73.component';
import { Formato72Component } from './formato72/formato72.component';
import { Formato71Component } from './formato71/formato71.component';
import { BusquedaComponent } from './formato71/busqueda/busqueda.component';
import { CuerpoComponent } from './formato71/cuerpo/cuerpo.component';
import { FolioComponent } from './formato71/folio/folio.component';
import { Formato70Component } from './formato70/formato70.component';
import { Formato69Component } from './formato69/formato69.component';
import { ClavepoyComponent } from './formato69/clavepoy/clavepoy.component';
import { CrigralevComponent } from './formato69/crigralev/crigralev.component';
import { EnclaperdivComponent } from './formato69/enclaperdiv/enclaperdiv.component';
import { FaviproComponent } from './formato69/favipro/favipro.component';
import { NomevaluadoresComponent } from './formato69/nomevaluadores/nomevaluadores.component';
import { PerpoyectoComponent } from './formato69/perpoyecto/perpoyecto.component';




@NgModule({
    declarations: [

    DatosgeneralesComponent,
       JustificacionComponent,
       ResumenComponent,
       InfotecnicaComponent,
       CronogramaComponent,
       HonorariosComponent,
       RecursosmaterialesComponent,
       ServiciosComponent,
       BienesmueblesComponent,
       ResumenderecursosComponent,
       CurriculumvitaeComponent,
       ErrorComponent,
       Formato73Component,
       Formato72Component,
       Formato71Component,
       BusquedaComponent,
       CuerpoComponent,
       FolioComponent,
       Formato70Component,
       Formato69Component,
       ClavepoyComponent,
       CrigralevComponent,
       EnclaperdivComponent,
       FaviproComponent,
       NomevaluadoresComponent,
       PerpoyectoComponent
  ],
  exports: [
    BienesmueblesComponent,
    CronogramaComponent,
    CurriculumvitaeComponent,
    DatosgeneralesComponent,
    HonorariosComponent,
    InfotecnicaComponent,
    JustificacionComponent,
    RecursosmaterialesComponent,
    ResumenComponent,
    ResumenderecursosComponent,
    ServiciosComponent,
    ErrorComponent
  ],
    imports: [
        CommonModule,
        MaquetadoformatosRoutingModule,
        ReactiveFormsModule
    ]
})
export class MaquetadoformatosModule { }
