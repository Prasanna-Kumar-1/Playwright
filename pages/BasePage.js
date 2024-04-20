import { expect } from "@playwright/test";

class BasePage {
  constructor(page) {
    this.page = page;
  }

  async openUrl(url) {
    return await this.page.goto(url);
  }

  async getTheTitle() {
    return await this.page.title();
  }

  async pause() {
    return await this.page.pause();
  }

  async getUrl() {
    return this.page.url();
  }

  async waitForPageLoad() {
    return await this.page.waitForLoadState("domcontentloaded");
  }

  async wait() {
    return await this.page.waitForTimeout(10000);
  }

  async fillTheData(selector, text) {
    return await this.page.fill(selector, text);
  }

  async click(selector) {
    return await this.page.click(selector);
  }

  async isElementVisible(selector, errorMessage) {
    const element = this.page.locator(selector);
    try {
      const isVisible = await element.isVisible();
      expect(isVisible).toBeTruthy();
    } catch (error) {
      throw new Error(`${errorMessage}`);
    }
  }

  async isElementEnabled(selector, errorMessage) {
    const element = this.page.locator(selector);
    try {
      const isEnabled = await element.isEnabled();
      expect(isEnabled).toBeTruthy();
    } catch (error) {
      throw new Error(`${errorMessage}`);
    }
  }
}
export default BasePage;
