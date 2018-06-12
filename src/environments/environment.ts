// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  /**
   * Liste de cle=valeur séparée par un | de données du contexte G2 a overrider.
   * Liste des clés possibles :
   * <ul>
   *     <li>USER
   *     <li>DOSSIER
   *     <li>CAISSEMETIER
   *     <li>CAISSE
   *     <li>DEPARTEMENT
   *     <li>CORGAMO
   *     <li>IDSI
   */
  cookieVal: 'USER=17042008|DOSSIER=123456789|CAISSEMETIER=28'
};
