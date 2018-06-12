import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleRoutingModule } from './example-routing.module';
import { ExampleComponent } from 'app/example/example.component';
import { FormUnComponent } from 'app/example/form-un/form-un.component';
import { FormDeuxComponent } from 'app/example/form-deux/form-deux.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalExampleComponent } from './modal-example/modal-example.component';
import { ZiaCoreModule } from 'zia-core';
import { WordingService, ZiaWordingModule } from 'zia-wording';


@NgModule({
  imports: [
    CommonModule,
    ExampleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ZiaCoreModule,
    ZiaWordingModule
  ],
  declarations: [
    ExampleComponent,
    FormUnComponent,
    FormDeuxComponent,
    ModalExampleComponent
  ],
  providers: [
    WordingService
  ]
})
export class ExampleModule { }
