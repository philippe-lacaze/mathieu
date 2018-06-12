
import {first} from 'rxjs/operators';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Activite } from '../shared/activite';
import {
  ActionBarConfig,
  ActionEnum,
  ActionStateSupportContext,
  ActionStateSupportService,
  NavigationStateService,
  States
} from 'zia-composants';
import { EtapesService } from '../services/etapes.service';
import { DossierService } from '../services/dossier.service';
import { ModalAction, ModalService } from 'zia-core';
import { SaisieActiviteComponent } from '../widget/saisie-activite/saisie-activite.component';

import { Subject } from 'rxjs';
import { Personne } from '../shared/personne';
import { MembreFamille } from '../shared/membreFamille';
import { SaisieMembreComponent } from '../widget/saisie-membre/saisie-membre.component';
import { Dossier } from '../shared/dossier';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-situation-familiale',
  templateUrl: './situation-familiale.component.html',
  styleUrls: ['./situation-familiale.component.scss']
})
export class SituationFamilialeComponent implements OnInit, OnDestroy, ActionStateSupportContext {

  membres: MembreFamille[];

  actionBarConfig?: ActionBarConfig = {
    positiveActionLabel: 'Suivant',
    negativeActionLabel: 'Précédent'
  };
  states?: States<any>;
  active?: boolean;

  constructor(public navigationStateService: NavigationStateService,
              private etapesService: EtapesService,
              private dossierService: DossierService,
              private actionStateSupport: ActionStateSupportService,
              private modalService: ModalService) {
    this.states = this.etapesService.states;
  }

  ngOnInit() {
    this.active = true;

    this.dossierService.getDossier()
      .pipe(takeWhile(() => this.active))
      .subscribe((dossier: Dossier) => this.membres = dossier.situationFamiliale.membres);

    // Activation de la gestion standard des évènements émis sur la barre d'étape
    this.actionStateSupport.listenStatesTransitionRequest(this.states, this);
  }

  ngOnDestroy() {
    this.active = false;
  }

  onAction(event: ActionEnum) {
    this.actionStateSupport.onActionBar(event, this);
  }

  onModifierMembre(membre: MembreFamille) {
    this.modalService
      .open(SaisieMembreComponent, membre).pipe(
      first())
      .subscribe(payload => {
        console.log(payload);
      });
  }

  onAjouterMembre() {
    const membre = new MembreFamille();
    membre.personne = new Personne();
    this.modalService
      .open(SaisieMembreComponent, membre).pipe(
      first())
      .subscribe(payload => {
        if ('ok' === payload) {
          this.membres.push(membre);
        }
      });
  }

  onSupprimerMembre(membre: MembreFamille) {
    const index = this.membres.indexOf(membre);
    this.membres.splice(index, 1);
  }

}

