const page = require("./Page");
class AssetPage {
  createAccountButton = "div.text-center a.btn:nth-child(3)";
  signInButton = "div.text-center summary.btn";
  firstNameInput = "#FirstName";
  lastNameInput = "#LastName";
  emailInput = "#Email";
  phoneInput = "#PhoneNumber";
  passwordInput = "#Password";
  confirmPasswordInput = "#ConfirmPassword";
  registerButton = "form button.btn";
  userEmailInput = "#Username";
  nextButton = ".Login-footer button.btn";

  async navigateTo(url) {
    return await browser.url(url);
  }

  async loginToAccount(email, password) {
    await page.click(this.signInButton);
    await page.setFieldValue(this.userEmailInput, email);
    await page.click(this.nextButton);
    await page.setFieldValue(this.passwordInput, password);
    await page.click(this.nextButton);
  }

  async clickCreateButton() {
    await page.click(this.createAccountButton);
  }

  async setFirstName(value) {
    await page.setFieldValue(this.firstNameInput, value);
  }

  async setLastName(value) {
    await page.setFieldValue(this.lastNameInput, value);
  }

  async setEMail(value) {
    await page.setFieldValue(this.emailInput, value);
  }
  async setPhone(value) {
    await page.setFieldValue(this.phoneInput, value);
  }

  async setPassword(value) {
    await page.setFieldValue(this.passwordInput, value);
  }

  async setConfirmPassword(value) {
    await page.setFieldValue(this.confirmPasswordInput, value);
  }

  async clickRegisterButton() {
    await page.click(this.registerButton);
  }
}

module.exports = new AssetPage();
