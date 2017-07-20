import { AGLTestPage } from './app.po';

describe('AGL Test App ', function() {
  let page: AGLTestPage;
  const title = `An alphabetical display of cat names ordered by owner's gender`;

  beforeEach(() => {
    page = new AGLTestPage();
    page.navigateTo();
  });

  it('should display message saying app title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual(title);
  });

  it('should display a list of 4 male owned cats', () => {
    page.navigateTo();
    expect(page.getMaleOwnedCatsElements().count()).toEqual(4);
  });

  it('should display showing the cats name is not `Maximus`', () => {
    page.navigateTo();
    expect(page.getMaleOwnedCatText('0')).not.toEqual('Maximus');
  });

  it('should display a list of 3 female owned cats', () => {
    page.navigateTo();
    expect(page.getFemaleOwnedCatsElements().count()).toEqual(3);
  });

});


describe('AGL Test App - test the ascending order of male owned cat names', function() {
  let page: AGLTestPage;

  beforeEach(() => {
    page = new AGLTestPage();
    page.navigateTo();
  });
  
  it('should display showing the male owned cats in ascending order ', () => {
    expect(page.getMaleOwnedCatText('0')).toEqual('Garfield');
    expect(page.getMaleOwnedCatText('1')).toEqual('Jim');
    expect(page.getMaleOwnedCatText('2')).toEqual('Max');
    expect(page.getMaleOwnedCatText('3')).toEqual('Tom');
  });
  
});


describe('AGL Test App - test the descending order of male owned cat names', function() {
  let page: AGLTestPage;

  beforeEach(() => {
    page = new AGLTestPage();
    page.navigateTo();
    page.getDescRadioButtonElement().click();
  });
  
  it('should display showing the male owned cats in descending order ', () => {
    expect(page.getMaleOwnedCatText('0')).toEqual('Tom');
    expect(page.getMaleOwnedCatText('1')).toEqual('Max');
    expect(page.getMaleOwnedCatText('2')).toEqual('Jim');
    expect(page.getMaleOwnedCatText('3')).toEqual('Garfield');
    expect(page.getMaleOwnedCatText('0')).not.toEqual('Garfield');
    
  });
  
});


describe('AGL Test App - test the ascending order of female owned cat names', function() {
  let page: AGLTestPage;

  beforeEach(() => {
    page = new AGLTestPage();
    page.navigateTo();
  });
  
  it('should display showing the female owned cats in ascending order ', () => {
    expect(page.getFemaleOwnedCatText('0')).toEqual('Garfield');
    expect(page.getFemaleOwnedCatText('1')).toEqual('Simba');
    expect(page.getFemaleOwnedCatText('2')).toEqual('Tabby');
  });
  
});


describe('AGL Test App - test the descending order of female owned cat names', function() {
  let page: AGLTestPage;

  beforeEach(() => {
    page = new AGLTestPage();
    page.navigateTo();
    page.getDescRadioButtonElement().click();
  });
  
  it('should display showing the female owned cats in descending order ', () => {
    expect(page.getFemaleOwnedCatText('0')).toEqual('Tabby');
    expect(page.getFemaleOwnedCatText('1')).toEqual('Simba');
    expect(page.getFemaleOwnedCatText('2')).toEqual('Garfield');
    expect(page.getFemaleOwnedCatText('0')).not.toEqual('Garfield');
  });
  
});
