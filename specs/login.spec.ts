var expect = require('chai').expect
import HomePage from '../pages/home.page'
import LoginPage from '../pages/login.page'

describe('Login page', () => {

  before(function() {
    HomePage.open()
    HomePage.clickLinkWithText("Form Authentication")
  })

  it('Page should have title', () => {
    expect(LoginPage.pageTitle).to.eql('The Internet')
  })

  it('Heading should have correct text', () => {
    expect(LoginPage.heading.getText()).to.eql('Login Page')
  })

  it('Blank username and password should display error message', () => {
      LoginPage.loginButton.click()
      let loginMessage = LoginPage.loginMessage.getText()
      LoginPage.refreshPage()

      expect(loginMessage).to.eql('Your username is invalid!\n×')
  })

  it('Page footer should have correct text', () => {
    expect(HomePage.pageFooter.getText()).to.eql('Powered by Elemental Selenium')
  })

  it('Page footer should have correct link', () => {
    expect(HomePage.pageFooterLink.getAttribute('href')).to.eql('http://elementalselenium.com/')
  })

});
