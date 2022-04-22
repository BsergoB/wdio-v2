const page = require("./Page.js");
class DashBoardPage {
  organizationInput = "input.form-control";
  createOrgButton = "button.btn.btn-primary";
  createRegisterButton = "nav button.btn:nth-child(5)";
  registerNameInput = ".Control-input input";
  countrySelect = "app-form-control.ng-star-inserted:nth-child(4) > div:nth-child(1) > div:nth-child(2) > select";
  entitySelect = "app-form-control.ng-star-inserted:nth-child(5) > div:nth-child(1) > div:nth-child(2) > select";
  monthlyRadioButton = "div.custom-control:nth-child(2) > label";
  nextButton = "button.btn-primary:nth-child(2)";
  myRegisterLink = "tr.ng-star-inserted > td:nth-child(2) > a";
  createAssetGroupLink = ".alert-message a.btn-secondary";
  assetNameInput = "input.w-75:nth-child(2)";
  assetDescriptionInput = "/html/body/app-root/div/main/app-view-assetgroup/app-standard-page/form/app-standard-page-content/div/div/div[2]/div[1]/input[2]";
  parentGroupInput = "div.col:nth-child(2) > input";
  taxDefaultInput = "div.form-group:nth-child(1) > div:nth-child(4) > select";
  accountsDefaultInput = "div.form-group:nth-child(2) > div:nth-child(4) > select";
  assetTypeInput = "select.custom-select:nth-child(4)";
  saveButton = "/html/body/app-root/div/main/app-view-assetgroup/app-standard-page/form/app-standard-page-content/div/div/div[1]/div[2]/div/button";

  async setOrganization(value) {
    await page.setFieldValue(this.organizationInput, value);
  }
  async clickCreateOrgButton() {
    await page.click(this.createOrgButton);
  }

  async clickCreateRegister() {
    await page.click(this.createRegisterButton);
  }

  async setCountry(value) {
    await page.setDropdownItemByOption(this.countrySelect, value);
  }

  async setEntity(value) {
    await page.setDropdownItemByOption(this.entitySelect, value);
  }

  async clickMonthlyRadioButton() {
    await page.click(this.monthlyRadioButton);
  }

  async clickNextButton() {
    await page.click(this.nextButton);
  }

  async clickMyRegister() {
    await page.click(this.myRegisterLink);
  }

  async clickCreateAssetGroup() {
    await page.click(this.createAssetGroupLink);
  }

  async setAssetNameInput(value) {
    await page.setFieldValue(this.assetNameInput, value);
  }

  async setAssetDescriptionInput(value) {
    await page.setFieldValue(this.assetDescriptionInput, value);
  }

  async setParentGroupInput(value) {
    await page.setFieldValue(this.parentGroupInput, value);
  }

  async setAssetType(value) {
    await page.setDropdownItemByOption(this.assetTypeInput, value);
  }

  async setTaxDefault(value) {
    await page.setDropdownItemByOption(this.taxDefaultInput, value);
  }

  async setAccountsDefault(value) {
    await page.setDropdownItemByOption(this.accountsDefaultInput, value);
  }

  async clickSaveButton() {
    await page.click(this.saveButton);
  }
}
module.exports = new DashBoardPage();
