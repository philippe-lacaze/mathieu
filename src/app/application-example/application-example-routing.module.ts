import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleComponent } from 'app/example/example.component';
import { ModalExampleComponent } from 'app/example/modal-example/modal-example.component';
import { SituationPersonnelleComponent } from './situation-personnelle/situation-personnelle.component';
import { AccueilComponent } from './accueil/accueil.component';
import { EtapesComponent } from './etapes/etapes.component';
import { RecapitulatifComponent } from './recapitulatif/recapitulatif.component';

const routes: Routes = [
  {
    path: '',
    component: AccueilComponent,
    data: {stateId: 'accueil'}
  },
  {
    path: 'accueil',
    component: AccueilComponent,
    data: {stateId: 'accueil'}
  },
  {
    path: 'etapes',
    component: EtapesComponent,
    data: {stateId: 'etapes'}
  },
  {
    path: 'recapitulatif',
    component: RecapitulatifComponent,
    data: {stateId: 'recapitulatif'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationExampleRoutingModule { }
