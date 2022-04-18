const start = require("./start.page");
const signInPage = require("./signin.page");
const credentials = require("../credentials/credentials");

class Page {

    open (path) {
        return browser.url(`https://dev.asset.accountant/${path}`)
    }

   async login() {
      await this.open();
      await this.click(start.signInButton);
      await this.setFieldValue(signInPage.userEmailInput, credentials.myEmail);
      await this.click(signInPage.nextButton);
      await this.setFieldValue(signInPage.passwordInput, credentials.myPassword);
      await this.click(signInPage.signInButton);
    }

    async getElement(element) {
        return await $(element);
    }

    getElementSync(element) {
        return $(element);
    }

    async moveToElement(element) {
        const inner = await this.getElementSync(element);
         await inner.moveTo();
    }

    async waitUntilClickable(element) {
        await browser.waitUntil(
            async () => {
            return (await this.getElement(element)).isClickable();
        }, 
        {timeout: 25000})
    }

    async clickCustom(element) {
        await (await this.getElement(element)).click();
    } 

    async click(element) {
        await this.waitUntilClickable(element);
        await (await this.getElement(element)).click();
}

    async setFieldValue(element, value) {
        await this.waitUntilClickable(element);
        await (await this.getElement(element)).addValue(value);
}

    async setSelectValue(element, value) {
        await this.waitUntilClickable(element);
        await (await this.getElement(element)).selectByAttribute('value', value);
    }

}
module.exports = new Page();