import { GoalsAppPage } from './app.po';

describe('goals-app App', () => {
  let page: GoalsAppPage;

  beforeEach(() => {
    page = new GoalsAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
