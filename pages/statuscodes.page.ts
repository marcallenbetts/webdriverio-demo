import BasePage from "../pages/base.page";

class StatusCodes_Page extends BasePage {
  public open(): void {
    browser.url("/status_codes");
  }

  public get heading() {
    return $("#content h3");
  }

  public get twoHundred() {
    return $("ul li:nth-of-type(1) a");
  }
  public get threeHundredOne() {
    return $("ul li:nth-of-type(2) a");
  }
  public get fourHundredFour() {
    return $("ul li:nth-of-type(3) a");
  }
  public get fiveHundred() {
    return $("ul li:nth-of-type(4) a");
  }
}
const StatusCodesPage = new StatusCodes_Page();
export default StatusCodesPage;
