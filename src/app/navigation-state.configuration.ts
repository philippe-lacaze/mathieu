import { StatePropertiesWithTransitions } from 'zia-composants';

/**
 * Déclaration des transitions de navigation entre pages routées.
 *
 * Cet objet définit, pour une page routée d'identifiant donné à laquelle est appliquée une
 * transition donnée (en général les transitions des boutons de zia-action-bar contenue dans zia-forma-action-panel),
 * quelle sera l'identifiant de la page routée suivante.
 *
 * Pour chaque id de page routée,la value correspond a la commande de navigation a passer a router.navigate() pour
 * déclencher effectivement la transition vers la page par le router.
 *
 * Cette déclaration de navigation est utilisée par navigationStateServiceFactory.
 *
 * A la création de ce service, une machine à état de la navigation est crée avec comme premier état courant le
 * premier élément du tableau suivante.
 *
 * La correspondance entre l'id de page utilisé dans cette déclaration et les entrées du router est donnée, dans chaque
 * entrée du router, par la propriété stateId des datas de chaque entrée.
 */
export const NAVIGATION: StatePropertiesWithTransitions<[any]>[] = [
  {
    id: 'accueil',
    value: ['applicationExample/accueil'],
    transitionsByKey: {
      'positive': {value: 'etapes'}
    }
  },
  {
    id: 'etapes',
    value: ['applicationExample/etapes'],
    transitionsByKey: {
      'negative': {value: 'accueil'},
      'positive': {value: 'recapitulatif'}
    }
  },
  {
    id: 'recapitulatif',
    value: ['applicationExample/recapitulatif'],
    transitionsByKey: {
      'negative': {value: 'etapes'}
    }
  }
];