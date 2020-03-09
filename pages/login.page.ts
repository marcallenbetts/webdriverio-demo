import BasePage from '../pages/base.page'

class LoginPage extends BasePage {
  public open(): LoginPage {
    browser.url('/login')
    return this
  }

  public get heading(): string {
    return $('#content h2').getText()
  }

  public get usernameTextField() {
    return $('#username')
  }

  public get passwordTextField() {
    return $('#password')
  }

  public get loginButton() {
    return $('button')
  }

  public get loginMessage(): string {
    return $('#flash').getText()
  }
}

export default new LoginPage()
