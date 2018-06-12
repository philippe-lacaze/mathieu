import { SituationPersonnelle } from './situationPersonnelle';
import { SituationProfessionnelle } from './situationProfessionnelle';
import { SituationFamiliale } from './situationFamiliale';

export class Dossier {
  situationPersonnelle: SituationPersonnelle;
  situationProfessionnelle: SituationProfessionnelle;
  situationFamiliale: SituationFamiliale;
}
