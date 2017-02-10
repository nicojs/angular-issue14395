import { AngularIssue14395Page } from './app.po';

describe('angular-issue14395 App', function() {
  let page: AngularIssue14395Page;

  beforeEach(() => {
    page = new AngularIssue14395Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
