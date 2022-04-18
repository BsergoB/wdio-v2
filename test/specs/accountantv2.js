const page = require("../mypagesV2/Page");
const createAccountPage = require("../mypagesV2/CreateAccount.page");
const credentials = require("../credentials/credentials");
const assetPage = require("../mypagesV2/Asset.page");
const dashBoardPage = require("../mypagesV2/DashBoard.page");

describe("Test suite of creating new account, logging in, creating a new register and adding an asset group at dev.asset.accountant", () => {
  xit("First test case: Creating Account", async () => {
    await assetPage.navigateTo(credentials.baseUrl);
    await page.click(assetPage.createAccountButton);
    await page.setFieldValue(createAccountPage.firstNameInput, credentials.myFirstName);
    await page.setFieldValue(createAccountPage.lastNameInput, credentials.myLastName);
    await page.setFieldValue(createAccountPage.emailInput, credentials.myEmail);
    await page.setFieldValue(createAccountPage.phoneInput, credentials.myPhone);
    await page.setFieldValue(createAccountPage.passwordInput, credentials.myPassword);
    await page.setFieldValue(createAccountPage.confirmPasswordInput, credentials.myPassword);
    await browser.pause(5000);
    await page.click(createAccountPage.registerButton);
    await browser.pause(10000);
  });

  xit("Second test case: Creating organization", async () => {
    await assetPage.navigateTo(credentials.baseUrl);
    await assetPage.loginToAccount(credentials.myEmail, credentials.myPassword);
    await page.setFieldValue(dashBoardPage.organizationInput, credentials.myOrg);
    await page.click(dashBoardPage.createButton);
    //await browser.pause(8000);
  });

  xit("Third test case: Creating register", async () => {
    await assetPage.navigateTo(credentials.baseUrl);
    await assetPage.loginToAccount(credentials.myEmail, credentials.myPassword);
    await page.click(dashBoardPage.createRegisterButton);
    await page.setFieldValue(dashBoardPage.registerNameInput, credentials.MyRegisterName);
    await page.setSelectValue(dashBoardPage.countrySelect, credentials.myCountry);
    await page.setSelectValue(dashBoardPage.entitySelect, credentials.myEntity);
    await page.click(dashBoardPage.monthlyRadioButton);
    await page.click(dashBoardPage.nextButton);
    //await browser.pause(15000);
  });

  it("Fourth test case: Adding asset group", async () => {
    await assetPage.navigateTo(credentials.baseUrl);
    await assetPage.loginToAccount(credentials.myEmail, credentials.myPassword);
    await page.click(dashBoardPage.myRegisterLink);
    await page.click(dashBoardPage.createAssetGroupLink);
    await page.setFieldValue(dashBoardPage.assetNameInput, credentials.myAssetName);
    await page.setFieldValue(dashBoardPage.assetDescriptionInput, credentials.myDescription);
    await page.setFieldValue(dashBoardPage.parentGroupInput, credentials.myParentGroup);
    await page.setSelectValue(dashBoardPage.assetTypeInput, credentials.myAsset);
    await page.setSelectValue(dashBoardPage.taxDefaultInput, credentials.myTax);
    await page.setSelectValue(dashBoardPage.accountsDefaultInput, credentials.myAccounts);
    await page.click(dashBoardPage.saveButton);
    //await browser.pause(15000);
  });

  xit("Fifth test case: Successful login", async () => {
    await assetPage.navigateTo(credentials.baseUrl);
    await assetPage.loginToAccount(credentials.myEmail, credentials.myPassword);
    await browser.pause(20000);
  });
});
