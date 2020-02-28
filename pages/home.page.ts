import BasePage from '../pages/base.page'

class Home_Page extends BasePage {
  public open(): Home_Page {
    browser.url('/')
    return this
  }

  public get headingOne(): string {
    return $('#content h1').getText()
  }
  public get headingTwo(): string {
    return $('#content h2').getText()
  }

  public clickLinkWithText(linkText: String): any {
    $('=' + linkText).click()
    return this
  }
}

const HomePage = new Home_Page()
export default HomePage
