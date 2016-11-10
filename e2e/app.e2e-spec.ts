import { CardQuizPage } from './app.po';

describe('card-quiz App', function() {
  let page: CardQuizPage;

  beforeEach(() => {
    page = new CardQuizPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
