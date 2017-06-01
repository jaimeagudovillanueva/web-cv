import { WebCvPage } from './app.po';

describe('web-cv App', () => {
  let page: WebCvPage;

  beforeEach(() => {
    page = new WebCvPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
