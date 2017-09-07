var expect = require('chai').expect
import HomePage from '../pages/home.page'

describe('Home page', () => {

  before(function() {
    HomePage.open()
  })

  it('Page should have title', () => {
    expect(HomePage.pageTitle).to.eql('The Internet')
  })

  it('Heading 1 should have correct text', () => {
    expect(HomePage.headingOne.getText()).to.eql('Welcome to the-internet')
  })

  it('Heading 2 should have correct text', () =>{
    expect(HomePage.headingTwo.getText()).to.eql('Available Examples')
  })

  it('Page footer should have correct text', () => {
    expect(HomePage.pageFooter.getText()).to.eql('Powered by Elemental Selenium')
  })

  it('Page footer should have correct link', () => {
    expect(HomePage.pageFooterLink.getAttribute('href')).to.eql('http://elementalselenium.com/')
  })

});
