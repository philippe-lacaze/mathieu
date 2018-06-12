import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MockData } from './mocks/mockdata';
import { environment } from '../environments/environment';
import { CookieConf } from './mocks/cookie.dev';
import { ExampleService } from './example/example.service';
import {
  ModalService, ZiaCoreModule
} from 'zia-core';
import { BandeauExtranetConfig, ZiaBandeauExtranetModule } from 'zia-bandeau-extranet';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ZiaWordingModule } from 'zia-wording';
import { APPLICATION_WORDING } from './application.wording';
import { SaisieActiviteComponent } from './application-example/widget/saisie-activite/saisie-activite.component';
import { ApplicationExampleModule } from './application-example/application-example.module';
import { NAVIGATION } from './navigation-state.configuration';
import { ZiaNavigationStateModule, ZiaStateWizardModule } from 'zia-composants';

/**
 * Configuration du module d'intégration du bandeau extranet
 * @type {{appName: string}}
 */
const bandeauExtranetConfig: BandeauExtranetConfig = {
  appName: 'z75testng'
};

const imports: any = [
  AppRoutingModule,
  BrowserModule,
  HttpModule,
  HttpClientModule,

  // Module core du socle, obligatoire
  ZiaCoreModule,

  // Module socle de gestion des de la barre d'étape
  ZiaStateWizardModule,

  // Module socle d'intégration du bandeau extranet
  ZiaBandeauExtranetModule.forConfig(bandeauExtranetConfig),

  // Module socle de gestion du wording
  ZiaWordingModule.forConfig(APPLICATION_WORDING),

  // Module de déclenchement déclaratif de la navigation routée
  ZiaNavigationStateModule.forConfig(NAVIGATION),

  // Sous-module de l'application example
  ApplicationExampleModule
];

if (!environment.production) {
  imports.push(
    InMemoryWebApiModule.forRoot(MockData, {
      passThruUnknownUrl: true, // laisse passer les api non mockée
      apiBase: 'z75testng/wsrest/'
    })
  );
  new CookieConf();
}

@NgModule({
  declarations: [
  ],
  imports: imports,
  providers: [
    // Service applicatif
    ExampleService,

    // Service de gestion du singleton de zia-modale utilisé dans le app-component.html
    ModalService
  ],
  bootstrap: [AppComponent]

})
export class AppModule {
}
