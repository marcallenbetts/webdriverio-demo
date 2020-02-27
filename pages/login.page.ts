import BasePage from '../pages/base.page'

class Login_Page extends BasePage {
  public open(): Login_Page {
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
const LoginPage = new Login_Page()
export default LoginPage
