import { SearchYoutubePage } from './app.po';

describe('search-youtube App', () => {
  let page: SearchYoutubePage;

  beforeEach(() => {
    page = new SearchYoutubePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
