import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import * as moment from 'moment';
import { NavigationStateApp, NavigationStateService } from 'zia-composants';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalAction, ModalService } from 'zia-core';
import { Subject } from 'rxjs';

/**
 * Composant root de l'application.
 * Ce composant est **interne au socle** et n'est pas censé être modifié par les applications métier.
 * Les applications métier sont censée définir au moins UN sous-module angular contenant leur code applicatifs.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends NavigationStateApp implements OnInit {

  modalEvent: Subject<ModalAction>;

  constructor(private route: ActivatedRoute,
              navigationStateService: NavigationStateService,
              protected router: Router,
              private modalService: ModalService) {

    super(navigationStateService, router);

    // Gestion du singleton zia-modal de l'application, chargé d'afficher toute les modales
    this.modalEvent = this.modalService.modalActionEvent;
  }

  ngOnInit(): void {
  }
}
