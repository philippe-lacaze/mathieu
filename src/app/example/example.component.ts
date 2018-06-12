import { Component, OnInit } from '@angular/core';
import { ExampleService } from './example.service';
import { Example } from './example';

/**
 * Composant Example, accédant au données d'un DTO Example et le modifiant, via un ExampleService.
 */
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

  /**
   * Stocke le DTO retourné par le service.
   * @type {Example}
   */
  public exampleServiceResponse = <Example>{};

  /**
   * @constructor
   * @param exampleService
   */
  constructor(private exampleService: ExampleService) {
    exampleService.read().subscribe(this._updateExampleServiceResponse);
  }

  ngOnInit() {
  }

  /**
   * Gestionnaire de l'événement submit, appelant this.exampleService pour maj this.exampleServiceResponse.
   */
  submit() {
    console.log('ExampleComponent.submit=', this._updateExampleServiceResponse);
    this.exampleService.update(this.exampleServiceResponse).subscribe(this._updateExampleServiceResponse);
  }

  /**
   * Met a jour this.exampleServiceResponse. avec le contenu renvoyé par l'appel a this.exampleService en maj.
   * @param r
   * @private
   */
  private _updateExampleServiceResponse = (r) => {
    console.log('Réception de la réponse de exampleService =', r);
    this.exampleServiceResponse = r || <Example>{};
  }

}
