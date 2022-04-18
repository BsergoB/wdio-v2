const page = require("../mypagesV2/Page");
const signInPage = require("../mypagesV2/SignIn.page");
const credentials = require("../credentials/credentials");
class AssetPage {
  createAccountButton = "div.text-center a.btn:nth-child(3)";
  signInButton = "div.text-center summary.btn";

  async navigateTo(url) {
    return await browser.url(url);
  }

  async loginToAccount(email, password) {
    await page.click(this.signInButton);
    await page.setFieldValue(signInPage.userEmailInput, email);
    await page.click(signInPage.nextButton);
    await page.setFieldValue(signInPage.passwordInput, password);
    await page.click(signInPage.signInButton);
  }
}

module.exports = new AssetPage();
