class Page {
  async getElement(element) {
    return await $(element);
  }

  async moveToElement(element) {
    const inner = await this.getElement(element);
    await inner.moveTo();
  }

  async waitUntilClickable(element) {
    await browser.waitUntil(
      async () => {
        return (await this.getElement(element)).isClickable();
      },
      { timeout: 15000 }
    );
  }

  async waitUntilDisplayed(element) {
    await browser.waitUntil(
      async () => {
        return (await this.getElement(element)).isDisplayed();
      },
      { timeout: 15000 }
    );
  }

  async clickCustom(element) {
    await (await this.getElement(element)).click();
  }

  async click(element) {
    await this.waitUntilClickable(element);
    await (await this.getElement(element)).click();
  }

  async setFieldValue(element, value) {
    await this.waitUntilDisplayed(element);
    await (await this.getElement(element)).addValue(value);
  }

  async setDropdownItemByOption(element, value) {
    await this.waitUntilClickable(element);
    await (await this.getElement(element)).selectByAttribute("value", value);
  }
}
module.exports = new Page();
