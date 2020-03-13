import { expect } from 'chai'

import HomePage from '../pages/home.page'

describe('Home page', () => {
  before(() => {
    HomePage.open()
  })

  it('Page should have title', () => {
    expect(HomePage.pageTitle).to.eql('The Internet')
  })

  it('Heading 1 should have correct text', () => {
    expect(HomePage.headingOne).to.eql('Welcome to the-internet')
  })

  it('Heading 2 should have correct text', () => {
    expect(HomePage.headingTwo).to.eql('Available Examples')
  })

  it('Page footer should have correct text', () => {
    expect(HomePage.pageFooter.text).to.eql('Powered by Elemental Selenium')
  })

  it('Page footer should have correct link', () => {
    expect(HomePage.pageFooter.link).to.eql('http://elementalselenium.com/')
  })
})
