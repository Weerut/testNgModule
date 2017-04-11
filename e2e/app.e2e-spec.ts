import { TestModulePage } from './app.po';

describe('test-module App', () => {
  let page: TestModulePage;

  beforeEach(() => {
    page = new TestModulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
