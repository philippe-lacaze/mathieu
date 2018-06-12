import { Component, Input, OnInit } from '@angular/core';
import { Activite } from '../../shared/activite';
import { ModalContentApi } from 'zia-core';
import { ActionBarConfig, ActionEnum, FormActionPanelEvent } from 'zia-composants';

@Component({
  selector: 'app-saisie-activite',
  templateUrl: './saisie-activite.component.html',
  styleUrls: ['./saisie-activite.component.scss']
})
export class SaisieActiviteComponent implements OnInit, ModalContentApi {

  actionBarConfig: ActionBarConfig = {
    positiveActionLabel: 'Enregistrer',
    negativeActionLabel: 'Annuler'
  };

  get activite() {
    return this.activiteTravail;
  }

  modalPayload: Activite;
  activiteTravail: Activite;

  close(closePayload: any): void {
  }

  constructor() {
    console.log('SaisieActiviteComponent');
  }

  ngOnInit() {
    console.log('SaisieActiviteComponent.init');
    if (this.modalPayload) {
      // copie de travail
      this.activiteTravail = JSON.parse(JSON.stringify(this.modalPayload));
    }
  }

  onFormActionEvent(event: FormActionPanelEvent) {
    if (event.action === ActionEnum.positive) {
      if (event.isValid) {
        // On recopie les valeurs de la copie de travail sur l'objet
        Object.assign(this.modalPayload, this.activiteTravail);
        this.close('ok');
      }
    } else {
      this.close('cancel');
    }
  }

}
