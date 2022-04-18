
const page = require("../mypagesV2/page");
const createAccount = require("../mypagesV2/createaccount.page");
const credentials = require("../credentials/credentials");
const start = require("../mypagesV2/start.page");
const signInPage = require("../mypagesV2/signin.page");
const dashboard = require("../mypagesV2/dashboard.page");

describe('Test suite of creating new account, logging in, creating a new register and adding an asset group at dev.asset.accountant', () => {

    it('First test case: Creating Account', async () => {
        await page.open();
        await page.click(start.createAccountButton);
        await page.setFieldValue(createAccount.firstNameInput, credentials.myFirstName);
        await page.setFieldValue(createAccount.lastNameInput, credentials.myLastName);
        await page.setFieldValue(createAccount.emailInput, credentials.myEmail);
        await page.setFieldValue(createAccount.phoneInput, credentials.myPhone);
        await page.setFieldValue(createAccount.passwordInput, credentials.myPassword);
        await page.setFieldValue(createAccount.confirmPasswordInput, credentials.myPassword);
        await page.click(createAccount.registerButton);
        //await browser.pause(15000);
    });

    xit('Second test case: Creating organization', async () => {

        await page.login();
        await page.setFieldValue(dashboard.organizationInput, credentials.myOrg);
        await page.click(dashboard.createButton);
        //await browser.pause(8000);
    
    })

    xit('Third test case: Creating register', async () => {
        await page.login();
        await page.click(dashboard.createRegisterButton);
        await page.setSelectValue(dashboard.countrySelect, credentials.myCountry);
        await page.setSelectValue(dashboard.entitySelect, credentials.myEntity);
        await page.click(dashboard.monthlyRadioButton);
        await page.click(dashboard.nextButton);
        //await browser.pause(15000);
    })

    xit('Fourth test case: Adding asset group', async () => {
        await page.login();
        await page.click(dashboard.myRegisterLink);
        await page.click(dashboard.createAssetGroupLink);
        await page.setFieldValue(dashboard.assetNameInput, credentials.myAssetName);
        await page.setFieldValue(dashboard.assetDescriptionInput, credentials.myDescription);
        await page.setFieldValue(dashboard.parentGroupInput, credentials.myParentGroup);
        await page.setSelectValue(dashboard.assetTypeInput, credentials.myAsset);
        await page.setSelectValue(dashboard.taxDefaultInput, credentials.myTax);
        await page.setSelectValue(dashboard.accountsDefaultInput, credentials.myAccounts);
        await page.click(dashboard.saveButton);
        //await browser.pause(15000);

    })

    xit('Fifth test case: Successful login', async () => {
        await page.login();
        await browser.pause(20000);
    })

});