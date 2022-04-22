const credentials = require("../credentials/credentials");
const assetPage = require("../mypagesV2/Asset.page");
const dashBoardPage = require("../mypagesV2/DashBoard.page");

describe("Test suite of creating new account, logging in, creating a new register and adding an asset group at dev.asset.accountant", () => {
 async function openAndLogin (url, email, password) {
    await assetPage.navigateTo(url);
    await assetPage.loginToAccount(email, password);
  }
  xit("First test case: Creating Account", async () => {
    await assetPage.navigateTo(credentials.baseUrl);
    await assetPage.clickCreateButton();
    await assetPage.setFirstName(credentials.myFirstName);
    await assetPage.setLastName(credentials.myLastName);
    await assetPage.setEMail(credentials.myEmail);
    await assetPage.setPhone(credentials.myPhone);
    await assetPage.setPassword(credentials.myPassword);
    await assetPage.setConfirmPassword(credentials.myPassword);
    await assetPage.clickRegisterButton();
    await browser.pause(5000);
  });

  xit("Second test case: Creating organization", async () => {
    await assetPage.navigateTo(credentials.baseUrl);
    await assetPage.loginToAccount(credentials.myEmail, credentials.myPassword);
    await dashBoardPage.setOrganization(credentials.myOrg);
    await dashBoardPage.clickCreateOrgButton();
    await browser.pause(5000);
  });

  xit("Third test case: Creating register", async () => {
    await assetPage.navigateTo(credentials.baseUrl);
    await assetPage.loginToAccount(credentials.myEmail, credentials.myPassword);
    await dashBoardPage.clickCreateRegister();
    await dashBoardPage.setCountry(credentials.myCountry);
    await dashBoardPage.setEntity(credentials.myEntity);
    await dashBoardPage.clickMonthlyRadioButton();
    await dashBoardPage.clickNextButton();
    await browser.pause(5000);
  });

  xit("Fourth test case: Adding asset group", async () => {
    await assetPage.navigateTo(credentials.baseUrl);
    await assetPage.loginToAccount(credentials.myEmail, credentials.myPassword);
    await dashBoardPage.clickMyRegister();
    await dashBoardPage.clickCreateAssetGroup();
    await dashBoardPage.setAssetNameInput(credentials.myAssetName);
    await dashBoardPage.setAssetDescriptionInput(credentials.myDescription);
    await dashBoardPage.setParentGroupInput(credentials.myParentGroup);
    await dashBoardPage.setAssetType(credentials.myAsset);
    await dashBoardPage.setTaxDefault(credentials.myTax);
    await dashBoardPage.setAccountsDefault(credentials.myAccounts);
    await dashBoardPage.clickSaveButton();
    await browser.pause(5000);
  });

  it("Fifth test case: Successful login", async () => {
    await openAndLogin(credentials.baseUrl, credentials.myEmail, credentials.myPassword)
    //await assetPage.navigateTo(credentials.baseUrl);
    //await assetPage.loginToAccount(credentials.myEmail, credentials.myPassword);
    await browser.pause(10000);
  });
});
