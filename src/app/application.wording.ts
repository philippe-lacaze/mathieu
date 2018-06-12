import { ValidationWordingByPath, WordingByKey } from 'zia-wording';

/**
 * Définition du wording de toute l'application.
 *
 * ** ATTENTION : cette constante porte uniquement la définition du wording utilisé par le wordingService et le composant zia-form-field **
 * ** Pour récupérer programmatiquement un wording dans le code il ne faut PAS passer directement pas cette constante
 *    mais par WordingService **
 *
 * @type {WordingByKey}
 */
export const APPLICATION_WORDING: WordingByKey = {
  dossier: {
    label: 'N° dossier',
    validation: {
      required: {
        errorMsg: 'Le champ {s1} est requis, svp !'
      }
    }
  },
  nom: {
    label: 'Nom'
  },
  prenom: {
    label: 'Prénom'
  },
  dateNaissance: {
    label: 'Date de naissance'
  },
  libelleActivite: {
    label: 'Activité'
  },
  dateDebut: {
    label: 'Date de début'
  },
  dateFin: {
    label: 'Date de fin'
  }
};
