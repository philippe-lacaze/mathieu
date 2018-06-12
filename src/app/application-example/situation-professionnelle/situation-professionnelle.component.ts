
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
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-situation-professionnelle',
  templateUrl: './situation-professionnelle.component.html',
  styleUrls: ['./situation-professionnelle.component.scss']
})
export class SituationProfessionnelleComponent implements OnInit, OnDestroy, ActionStateSupportContext {

  activites: Activite[];

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
      .subscribe(dossier => this.activites = dossier.situationProfessionnelle.activites);

    // Activation de la gestion standard des évènements émis sur la barre d'étape
    this.actionStateSupport.listenStatesTransitionRequest(this.states, this);
  }

  ngOnDestroy() {
    this.active = false;
  }

  onAction(event: ActionEnum) {
    this.actionStateSupport.onActionBar(event, this);
  }

  onModifierActivite(activite: Activite) {
    this.modalService
      .open(SaisieActiviteComponent, activite).pipe(
      first())
      .subscribe(payload => {
        console.log(payload);
      });
  }

  onAjouterActivite() {
    const activite = new Activite();
    this.modalService
      .open(SaisieActiviteComponent, activite).pipe(
      first())
      .subscribe(payload => {
        if ('ok' === payload) {
          this.activites.push(activite);
        }
      });
  }

  onSupprimerActivite(activite: Activite) {
    const index = this.activites.indexOf(activite);
    this.activites.splice(index, 1);
  }

}
