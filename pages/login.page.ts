import BasePage from '../pages/base.page'

class Login_Page extends BasePage {

    public open(): void {
        browser.url('/login')
    }

    public get heading()  { return browser.element('#content h2') }

    public get usernameTextField() { return browser.element('#username') }
    public get passwordTextField() { return browser.element('#password') }
    public get loginButton() { return browser.element('button') }

    public get loginMessage() { return browser.element('#flash') }

}
const LoginPage = new Login_Page()
export default LoginPage