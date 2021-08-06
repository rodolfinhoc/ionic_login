import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { CreatePDVPageRoutingModule } from './CreatePDV-routing.module';
import { CreatePDVPage } from './CreatePDV.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePDVPageRoutingModule,
    RouterModule .forChild([
      {
        path: '',
        component: CreatePDVPage
      }
    ]),
    NgxDatatableModule,
  ],
  declarations: [CreatePDVPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CreatePDVPageModule {}
