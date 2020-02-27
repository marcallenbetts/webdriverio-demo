class BasePage {
  public get pageTitle() {
    return browser.getTitle();
  }
  public get pageFooter() {
    return $("#page-footer div:nth-of-type(1)");
  }
  public get pageFooterLink() {
    return $("#page-footer a");
  }

  public refreshPage(): void {
    browser.refresh();
  }

  //get browser options. for now, just exposing the baseUrl
  public baseUrl(): String {
    return browser.options.baseUrl;
  }
}

export default BasePage;
