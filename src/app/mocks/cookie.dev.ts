import { environment } from "../../environments/environment";
export class CookieConf {

  private static key: string = 'contextG2';

  constructor() {
    const currentCookie = environment.cookieVal && encodeURIComponent(environment.cookieVal);
    if (currentCookie) {
      CookieConf.setCookie(currentCookie);
    }
  }

  static setCookie(value: string) {
    document.cookie = `${CookieConf.key}=${value}`;
  }
}
