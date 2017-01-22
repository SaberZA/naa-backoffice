import { NaaBackendPage } from './app.po';

describe('naa-backend App', function() {
  let page: NaaBackendPage;

  beforeEach(() => {
    page = new NaaBackendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
