import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display welcome message', () => {
    expect(page.getTitleText()).toEqual('Welcome to my-app!');
  });

  describe('navigation buttons' , () => {
    it('should have a button for \'Home\'', () => {
      expect(page.getFrontPage().homeButton().getText()).toEqual('Home');
    });
  });
});
