import { TwitchAPIPage } from './app.po';

describe('twitch-api App', () => {
  let page: TwitchAPIPage;

  beforeEach(() => {
    page = new TwitchAPIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
