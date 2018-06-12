import {of as observableOf,  Observable } from 'rxjs';
import {tap} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dossier } from '../shared/dossier';

@Injectable()
export class DossierService {

  private url = '/z75testng/wsrest/dossier';

  // cache interne
  private dossier: Dossier;

  constructor(private httpClient: HttpClient) {
  }

  getDossier(): Observable<Dossier> {
    if (!this.dossier) {
      return this.httpClient.get<Dossier>(this.url)
      	.pipe(
      		tap(dossier => this.dossier = dossier)
      	 );
    } else {
      return observableOf(this.dossier);
    }

  }

}
