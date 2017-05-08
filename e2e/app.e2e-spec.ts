import { WeeaBotWebPage } from './app.po';

describe('weea-bot-web App', () => {
  let page: WeeaBotWebPage;

  beforeEach(() => {
    page = new WeeaBotWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
