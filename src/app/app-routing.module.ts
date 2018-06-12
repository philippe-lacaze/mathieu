import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from 'zia-core';
import { BandeauResolverService } from 'zia-bandeau-extranet';
import { environment } from '../environments/environment.prod';
import { NavigationStateGuardService } from 'zia-composants';

const routes: Routes = [
  {
    // CETTE PARTIE EST INTERNE AU SOCLE //
    path: '',
    canActivateChild: [NavigationStateGuardService],
    resolve: {
      bandeauModel: BandeauResolverService
    },

    // CETTE PARTIE EST DE RESPONSABILITE METIER //
    children: [
      {
        path: '',
        redirectTo: '/applicationExample',
        pathMatch: 'full'
      },
      {
        path: 'example',
        loadChildren: 'app/example/example.module#ExampleModule'
      },
      {
        path: 'applicationExample',
        loadChildren: 'app/application-example/application-example.module#ApplicationExampleModule'
      }
    ]
  },

  // CETTE PARTIE EST INTERNE AU SOCLE //
  {
    path: '**', component: PageNotFoundComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        enableTracing: !environment.production,
        useHash: true
      }
    )
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
