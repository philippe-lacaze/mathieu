import { Component, Input, OnInit } from '@angular/core';
import { Activite } from '../../shared/activite';
import { ModalContentApi } from 'zia-core';
import { ActionBarConfig, ActionEnum, FormActionPanelEvent } from 'zia-composants';
import { MembreFamille } from '../../shared/membreFamille';

@Component({
  selector: 'app-saisie-activite',
  templateUrl: './saisie-membre.component.html',
  styleUrls: ['./saisie-membre.component.scss']
})
export class SaisieMembreComponent implements OnInit, ModalContentApi {

  actionBarConfig: ActionBarConfig = {
    positiveActionLabel: 'Enregistrer',
    negativeActionLabel: 'Annuler'
  };

  get membre() {
    return this.membreTravail;
  }

  modalPayload: MembreFamille;
  membreTravail: MembreFamille;

  close(closePayload: any): void {
  }

  constructor() {
     }

  ngOnInit() {
    if (this.modalPayload) {
      // copie de travail
      this.membreTravail = JSON.parse(JSON.stringify(this.modalPayload));
    }
  }

  onFormActionEvent(event: FormActionPanelEvent) {
    if (event.action === ActionEnum.positive) {
      if (event.isValid) {
        // On recopie les valeurs de la copie de travail sur l'objet
        Object.assign(this.modalPayload, this.membreTravail);
        this.close('ok');
      }
    } else {
      this.close('cancel');
    }
  }

}

