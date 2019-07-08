import {$, browser, by, element, ElementFinder} from 'protractor';

class PageTemplate {
  private _elem: ElementFinder;

  constructor(elem: ElementFinder) {
    this._elem = elem;
  }

  elem(): ElementFinder {
    return this._elem;
  }
}

class FrontPage extends PageTemplate {
  homeButton(): ElementFinder {
    return this.elem().$('.home-button')
  }
}

export class AppPage extends PageTemplate{
  constructor() {
    super($('.'));
  }
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  getFrontPage(): FrontPage {
    return new FrontPage($('.front-page'));
  }
}
