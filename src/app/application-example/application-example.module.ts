import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SituationPersonnelleComponent } from './situation-personnelle/situation-personnelle.component';
import { ApplicationExampleRoutingModule } from './application-example-routing.module';
import { ZiaWordingModule } from 'zia-wording';
import { FormsModule } from '@angular/forms';
import {
  ActionStateSupportService, FormActionStateSupportService, ZiaActionPanelModule,
  ZiaStateWizardModule
} from 'zia-composants';
import { DossierService } from './services/dossier.service';
import { AccueilComponent } from './accueil/accueil.component';
import { EtapesComponent } from './etapes/etapes.component';
import { SituationProfessionnelleComponent } from 'app/application-example/situation-professionnelle/situation-professionnelle.component';
import { EtapesService } from './services/etapes.service';
import { RecapitulatifComponent } from './recapitulatif/recapitulatif.component';
import { SaisieActiviteComponent } from './widget/saisie-activite/saisie-activite.component';
import { MockData } from '../mocks/mockdata';
import { ZiaCoreModule } from 'zia-core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { APPLICATION_WORDING } from '../application.wording';
import { SituationFamilialeComponent } from './situation-familiale/situation-familiale.component';
import { SaisieMembreComponent } from './widget/saisie-membre/saisie-membre.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ZiaWordingModule.forConfig(APPLICATION_WORDING),
    ZiaActionPanelModule,
    ZiaStateWizardModule,
    ZiaCoreModule,
    ApplicationExampleRoutingModule,
    InMemoryWebApiModule.forRoot(MockData, {
      passThruUnknownUrl: true, // laisse passer les api non mockée
      apiBase: 'z75testng/wsrest/'
    })
  ],
  exports: [
    SaisieActiviteComponent
  ],
  declarations: [SituationPersonnelleComponent,
    AccueilComponent,
    EtapesComponent,
    SituationProfessionnelleComponent,
    RecapitulatifComponent,
    SaisieActiviteComponent,
    SituationFamilialeComponent,
    SaisieMembreComponent],
  providers: [
    DossierService,
    EtapesService,
    ActionStateSupportService,
    FormActionStateSupportService
  ],
  entryComponents: [
    SituationPersonnelleComponent,
    SituationProfessionnelleComponent,
    SituationFamilialeComponent,
    SaisieActiviteComponent,
    SaisieMembreComponent
  ]
})
export class ApplicationExampleModule { }
