import { Injectable, Type } from '@angular/core';
import { State, States } from 'zia-composants';
import { SituationPersonnelleComponent } from '../situation-personnelle/situation-personnelle.component';

@Injectable()
export class EtapesService {

  states: States<Type<any>>;

  constructor() {
  }

}
