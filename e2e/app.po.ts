import { browser, element, by } from 'protractor';

export class AGLTestPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('h1')).getText();
  }

  getDescRadioButtonElement() {
    return element.all(by.id('desc'));
  }

   getMaleOwnedCatsElements() {
     return element.all(by.css('.male-owned-cats'));
   }

  getMaleOwnedCatText(index: string) {
    return element(by.css('#male-owned-cats' + index)).getText();
    
  }

  getFemaleOwnedCatText(index: string) {
    return element(by.css('#female-owned-cats' + index)).getText();
    
  }

  getFemaleOwnedCatsElements() {
    return element.all(by.css('.female-owned-cats'));
  }


}
