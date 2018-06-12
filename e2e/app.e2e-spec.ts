import { G2RiaPage } from './app.po';

describe('g2-ria App', () => {
  let page: G2RiaPage;

  beforeEach(() => {
    page = new G2RiaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
