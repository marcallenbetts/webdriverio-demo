var expect = require('chai').expect
import HomePage from '../pages/home.page'
import StatusCodesPage from '../pages/statuscodes.page'

describe('Status Codes page', () => {
  before(function() {
    HomePage.open().clickLinkWithText('Status Codes')
  })

  it('Page should have title', () => {
    expect(StatusCodesPage.pageTitle).to.eql('The Internet')
  })

  it('Page should have correct heading text', () => {
    expect(StatusCodesPage.heading.getText()).to.eql('Status Codes')
  })

  it('Page should have a 200 link', () => {
    expect(StatusCodesPage.twoHundred.text).to.eql('200')
  })

  it('200 link should link to 200 page', () => {
    expect(StatusCodesPage.twoHundred.link).to.eql(
      StatusCodesPage.baseUrl + 'status_codes/200'
    )
  })

  it('Page should have a 301 link', () => {
    expect(StatusCodesPage.threeHundredOne.text).to.eql('301')
  })

  it('301 link should link to 301 page', () => {
    expect(StatusCodesPage.threeHundredOne.link).to.eql(
      StatusCodesPage.baseUrl + 'status_codes/301'
    )
  })

  it('Page should have a 404 link', () => {
    expect(StatusCodesPage.fourHundredFour.text).to.eql('404')
  })

  it('404 link should link to 404 page', () => {
    expect(StatusCodesPage.fourHundredFour.link).to.eql(
      StatusCodesPage.baseUrl + 'status_codes/404'
    )
  })

  it('Page should have a 500 link', () => {
    expect(StatusCodesPage.fiveHundred.text).to.eql('500')
  })

  it('500 link should link to 500 page', () => {
    expect(StatusCodesPage.fiveHundred.link).to.eql(
      StatusCodesPage.baseUrl + 'status_codes/500'
    )
  })

  it('Page footer should have correct text', () => {
    expect(StatusCodesPage.pageFooter.text).to.eql(
      'Powered by Elemental Selenium'
    )
  })

  it('Page footer should have correct link', () => {
    expect(StatusCodesPage.pageFooter.link).to.eql(
      'http://elementalselenium.com/'
    )
  })
})
