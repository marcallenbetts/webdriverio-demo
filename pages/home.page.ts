import BasePage from '../pages/base.page'

class Home_Page extends BasePage {

    public open(): void {
        browser.url('/')
    }

    public get headingOne() { return browser.element('#content h1')}
    public get headingTwo() { return browser.element('#content h2')}

    public clickLinkWithText(linkText: String) {
        browser.element('=' + linkText).click()
    }

    // public submit(): void {
    //     this.form.submitForm()
    // }

    }



const HomePage = new Home_Page()
export default HomePage
