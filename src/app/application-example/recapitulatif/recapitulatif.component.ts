import { Component, OnDestroy, OnInit } from '@angular/core';
import { DossierService } from '../services/dossier.service';
import { Dossier } from 'app/application-example/shared/dossier';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-recapitulatif',
  templateUrl: './recapitulatif.component.html',
  styleUrls: ['./recapitulatif.component.scss']
})
export class RecapitulatifComponent implements OnInit, OnDestroy {

  active: boolean;
  dossier: Dossier;

  constructor(private dossierService: DossierService) { }


  ngOnInit() {
    this.active = true;

    this.dossierService.getDossier()
      .pipe(takeWhile(() => this.active))
      .subscribe(dossier => this.dossier = dossier);

  }

  ngOnDestroy() {
    this.active = false;
  }

}
