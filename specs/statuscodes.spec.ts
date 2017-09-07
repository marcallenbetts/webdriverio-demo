var expect = require('chai').expect
import HomePage from '../pages/home.page'
import StatusCodesPage from '../pages/statuscodes.page'

describe('Status Codes page', () => {

  before(function() {
    HomePage.open()
    HomePage.clickLinkWithText('Status Codes')
  })

  it('Page should have title', () => {
    expect(StatusCodesPage.pageTitle).to.eql('The Internet')
  })

  it('Page should have correct heading text', () => {
      expect(StatusCodesPage.heading.getText()).to.eql('Status Codes')
  })

  it('Page should have a 200 link', () => {
      expect(StatusCodesPage.twoHundred.getText()).to.eql('200')
  })

  it('200 link should link to 200 page', () => {
      expect(StatusCodesPage.twoHundred.getAttribute('href')).to.eql(StatusCodesPage.baseUrl() + 'status_codes/200')
  })

  it('Page should have a 301 link', () => {
      expect(StatusCodesPage.threeHundredOne.getText()).to.eql('301')
  })

  it('301 link should link to 301 page', () => {
      expect(StatusCodesPage.threeHundredOne.getAttribute('href')).to.eql(StatusCodesPage.baseUrl() + 'status_codes/301')
  })

  it('Page should have a 404 link', () => {
      expect(StatusCodesPage.fourHundredFour.getText()).to.eql('404')
  })

  it('404 link should link to 404 page', () => {
      expect(StatusCodesPage.fourHundredFour.getAttribute('href')).to.eql(StatusCodesPage.baseUrl() + 'status_codes/404')
  })

  it('Page should have a 500 link', () => {
      expect(StatusCodesPage.fiveHundred.getText()).to.eql('500')
  })

  it('500 link should link to 500 page', () => {
      expect(StatusCodesPage.fiveHundred.getAttribute('href')).to.eql(StatusCodesPage.baseUrl() + 'status_codes/500')
  })

  it('Page footer should have correct text', () => {
    expect(StatusCodesPage.pageFooter.getText()).to.eql('Powered by Elemental Selenium')
  })

  it('Page footer should have correct link', () => {
    expect(StatusCodesPage.pageFooterLink.getAttribute('href')).to.eql('http://elementalselenium.com/')
  })

});