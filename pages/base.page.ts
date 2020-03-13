interface IPageFooter {
  text: string
  link: string
}

class BasePage {
  public get pageTitle(): string {
    return browser.getTitle()
  }

  public get pageFooter(): IPageFooter {
    return {
      text: $('#page-footer div:nth-of-type(1)').getText(),
      link: $('#page-footer a').getAttribute('href')
    }
  }

  public refreshPage(): any {
    browser.refresh()
    return this
  }

  // get browser options. for now, just exposing the baseUrl
  public get baseUrl(): string {
    return browser.options.baseUrl
  }
}

export default BasePage
