import { Component, OnInit } from '@angular/core';
import { ActionBarConfig, ActionEnum, ActionStateSupportService, NavigationStateService } from 'zia-composants';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  actionBarConfig: ActionBarConfig = {
    positiveActionLabel: 'Continuez vers la première étape'
  };

  constructor(private navigationService: NavigationStateService) { }

  ngOnInit() {
  }

  onAction(action: ActionEnum): void {
    this.navigationService.requestNavigationStateTransition({value: action});
  }
}
