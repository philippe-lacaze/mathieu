import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { Example } from './example';
import { HttpClient } from '@angular/common/http';

/**
 * Example de service d'accès en REST.
 */
@Injectable()
export class ExampleService {

  private url = '/z75testng/wsrest/example';

  constructor(private http: HttpClient) {
  }

  /**
   * Accède au service REST et retourne un Observable sur l'example..
   * @return {Rx.Observable<Example>}
   */
  public read<Example>(): Observable<Example> {
    return this.http.get<Example>(this.url);
  }

  /**
   * Appele le service de maj de l'example donné et retourne un Observable sur l'example.
   * @param example donné, a maj.
   * @return {Rx.Observable<Example>}
   */
  public update<Example>(example: Example) {
    return this.http.put(this.url, example);
  }

}
