import { HttppostPage } from './app.po';

describe('httppost App', () => {
  let page: HttppostPage;

  beforeEach(() => {
    page = new HttppostPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
