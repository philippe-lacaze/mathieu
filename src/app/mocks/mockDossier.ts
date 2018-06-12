import { Dossier } from '../application-example/shared/dossier';

export const dossier: Dossier = {
  situationPersonnelle: {
    personne: {
      prenom: 'Jean',
      nom: 'Dupont',
      dateNaissance: '01/01/1971',
      sexe: 'masculin'
    },
    adresse: {
      numeroRue: '11',
      rue: 'rue de la paix',
      codePostal: '31000',
      libelleCommune: 'Toulouse'
    }
  },
  situationProfessionnelle: {
    activites: [
      {
        dateDebut: '01/01/2018',
        libelleActivite: 'Profession libérale'
      },
      {
        dateDebut: '01/01/2017',
        dateFin: '31/12/2017',
        libelleActivite: 'Intérimaire'
      }
    ]},
  situationFamiliale: {
    membres: [
      {
        statut: 'conjoint',
        personne: {
          prenom: 'Jeanine',
          nom: 'Dupont',
          dateNaissance: '02/02/1999',
          sexe: 'feminin'
        }
      },
      {
        statut: 'enfant',
        personne: {
          prenom: 'Jeannot',
          nom: 'Dupont',
          dateNaissance: '03/03/2008',
          sexe: 'masculin'
        }
      },
    ]
  }
};
