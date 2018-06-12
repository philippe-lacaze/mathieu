import { AfterViewInit, Component, ContentChild, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SituationPersonnelle } from '../shared/situationPersonnelle';
import { DossierService } from '../services/dossier.service';
import { Dossier } from '../shared/dossier';
import {
  ActionBarConfig, ActionStateSupportContext, FormActionPanelEvent, FormActionStateSupportContext,
  FormActionStateSupportService,
  NavigationStateService,
  States
} from 'zia-composants';
import { EtapesService } from '../services/etapes.service';
import { AbstractControl, NgForm } from '@angular/forms';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-situation-personnelle',
  templateUrl: './situation-personnelle.component.html',
  styleUrls: ['./situation-personnelle.component.scss']
})
export class SituationPersonnelleComponent implements OnInit, OnDestroy, AfterViewInit, FormActionStateSupportContext {

  /**
   * Le formulaire form1
   */
  @ViewChild('form1')
  private form1: NgForm;

  /* Début implémentation de FormActionStateSupportContext nécessaire à la gestion standard des actions sur la barre d'étape*/
  actionBarConfig?: ActionBarConfig = {
    positiveActionLabel: 'Suivant',
    negativeActionLabel: 'Précédent'
  };
  states?: States<any>;
  active: boolean;
  situationPersonnelle: SituationPersonnelle;
  /**
   * Le formulaire doit être valide avant toute action.
   * @param {FormActionPanelEvent} event
   * @return {boolean}
   */
  shouldValidate(event: FormActionPanelEvent) {
    return true;
  };
  /* fin implémentation de FormActionStateSupportContext */

  constructor(
    public navigationStateService: NavigationStateService,
    private dossierService: DossierService,
    private etapesService: EtapesService,
    private actionStateSupport: FormActionStateSupportService) {

    this.states = this.etapesService.states;
  }

  ngOnInit() {
    this.active = true;

    this.dossierService.getDossier()
      .pipe(takeWhile(() => this.active))
      .subscribe(dossier => this.situationPersonnelle = dossier.situationPersonnelle);

  }

  ngAfterViewInit() {
    // Activation de la gestion standard des évènements émis sur la barre d'étape
    this.actionStateSupport.listenStatesTransitionRequest(this.states, this, this.form1.control );
  }

  ngOnDestroy() {
    this.active = false;
  }

  onFormActionEvent(event: FormActionPanelEvent) {
    this.actionStateSupport.onFormActionEvent(event, this);
  }

}
