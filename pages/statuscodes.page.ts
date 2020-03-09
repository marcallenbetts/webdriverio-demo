interface ILink {
  text: string
  link: string
}

import BasePage from '../pages/base.page'

class StatusCodesPage extends BasePage {
  public open(): StatusCodesPage {
    browser.url('/status_codes')
    return this
  }

  public get heading() {
    return $('#content h3')
  }

  public get twoHundred(): ILink {
    return {
      text: $('ul li:nth-of-type(1) a').getText(),
      link: $('ul li:nth-of-type(1) a').getAttribute('href')
    }
  }

  public get threeHundredOne(): ILink {
    return {
      text: $('ul li:nth-of-type(2) a').getText(),
      link: $('ul li:nth-of-type(2) a').getAttribute('href')
    }
  }

  public get fourHundredFour(): ILink {
    return {
      text: $('ul li:nth-of-type(3) a').getText(),
      link: $('ul li:nth-of-type(3) a').getAttribute('href')
    }
  }

  public get fiveHundred(): ILink {
    return {
      text: $('ul li:nth-of-type(4) a').getText(),
      link: $('ul li:nth-of-type(4) a').getAttribute('href')
    }
  }
}

export default new StatusCodesPage()
