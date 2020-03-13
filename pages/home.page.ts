import BasePage from '../pages/base.page'

class HomePage extends BasePage {
  public open(): HomePage {
    browser.url('/')
    return this
  }

  public get headingOne(): string {
    return $('#content h1').getText()
  }
  public get headingTwo(): string {
    return $('#content h2').getText()
  }

  public clickLinkWithText(linkText: string): any {
    $(`=${linkText}`).click()
    return this
  }
}

export default new HomePage()
