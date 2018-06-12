import { Component, OnInit, Type } from '@angular/core';
import { EtapesService } from '../services/etapes.service';
import { State, States } from 'zia-composants';
import { SituationPersonnelleComponent } from '../situation-personnelle/situation-personnelle.component';
import { SituationProfessionnelleComponent } from '../situation-professionnelle/situation-professionnelle.component';
import { SituationFamilialeComponent } from '../situation-familiale/situation-familiale.component';

@Component({
  selector: 'app-etapes',
  templateUrl: './etapes.component.html',
  styleUrls: ['./etapes.component.scss']
})
export class EtapesComponent implements OnInit {

  states: States<Type<any>>;

  constructor(private etapesService: EtapesService) {
  }

  ngOnInit() {
    if (!this.etapesService.states) {
      this.etapesService.states = new States<Type<any>>([
        new State({
          id: 'situationProfessionnelle',
          label: 'Situation Professionnelle',
          value: SituationProfessionnelleComponent
        }),
        new State({
          id: 'situationPersonnelle',
          label: 'Situation Personnelle',
          value: SituationPersonnelleComponent
        }),
        new State({
          id: 'situationFamiliale',
          label: 'Situation Familiale',
          value: SituationFamilialeComponent
        }),
      ]);
    }
    this.states = this.etapesService.states;
  }

}
