import { expect } from 'chai'

import HomePage from '../pages/home.page'
import LoginPage from '../pages/login.page'

describe('Login page', () => {
  before(() => {
    HomePage.open().clickLinkWithText('Form Authentication')
  })

  it('Page should have title', () => {
    expect(LoginPage.pageTitle).to.eql('The Internet')
  })

  it('Heading should have correct text', () => {
    expect(LoginPage.heading).to.eql('Login Page')
  })

  it('Blank username and password should display error message', () => {
    LoginPage.loginButton.click()
    const loginMessage = LoginPage.loginMessage
    LoginPage.refreshPage()

    expect(loginMessage).to.eql('Your username is invalid!\n×')
  })

  it('Page footer should have correct text', () => {
    expect(HomePage.pageFooter.text).to.eql('Powered by Elemental Selenium')
  })

  it('Page footer should have correct link', () => {
    expect(HomePage.pageFooter.link).to.eql('http://elementalselenium.com/')
  })
})
