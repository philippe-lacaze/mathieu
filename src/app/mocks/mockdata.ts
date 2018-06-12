import { InMemoryDbService } from 'angular-in-memory-web-api';
import { bandeau } from './mockBandeauAPI';
import { example } from './mockExampleAPI';
import { dossier } from './mockDossier';

export class MockData implements InMemoryDbService {
  createDb() {
    return {
      //bandeau,
      //example,
      dossier
    };
  }
}
