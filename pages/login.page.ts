import BasePage from "../pages/base.page";

class Login_Page extends BasePage {
  public open(): void {
    browser.url("/login");
  }

  public get heading() {
    return $("#content h2");
  }

  public get usernameTextField() {
    return $("#username");
  }
  public get passwordTextField() {
    return $("#password");
  }
  public get loginButton() {
    return $("button");
  }

  public get loginMessage() {
    return $("#flash");
  }
}
const LoginPage = new Login_Page();
export default LoginPage;
