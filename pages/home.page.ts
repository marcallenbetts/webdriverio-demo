import BasePage from "../pages/base.page";

class Home_Page extends BasePage {
  public open(): void {
    browser.url("/");
  }

  public get headingOne() {
    return $("#content h1");
  }
  public get headingTwo() {
    return $("#content h2");
  }

  public clickLinkWithText(linkText: String) {
    $("=" + linkText).click();
  }

  // public submit(): void {
  //     this.form.submitForm()
  // }
}

const HomePage = new Home_Page();
export default HomePage;
