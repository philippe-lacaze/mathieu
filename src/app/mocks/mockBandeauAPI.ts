import { BandeauModel } from 'zia-bandeau-extranet';

export const bandeau: BandeauModel = {
  javascriptURLs: [`function testJs() {alert('TEST JS')}`],
  cssURLs: [`<style>header, footer, .bandeau {background-color: lightblue; text-align: center;}</style>`],
  metaTags: [
    '<meta name="toto" content="titi">',
    '<meta name="titi" content="toto">'
  ],
  filAriane: `<a class="bandeau" href="#">Fil d'ariane</a>`,
  bandeauHaut: '<header><h1>Bandeau Haut Portail Mock</h1></header>',
  bandeauBas: '<footer><h1>Bandeau Bas Portail Mock</h1></footer>',
  iconeAction: ' <a class="bandeau" href="#" onclick="testJs(); return false">Icône Action test js</a>',
  lienRetour: 'http://www.msa.fr/lfy/espace-prive'
};
