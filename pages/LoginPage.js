import BasePage from "./BasePage";
import testData from "../data/testData.json";

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.loginPageLogo = page.locator(".login_logo");
    this.userName = page.locator("[data-test='username']");
    this.password = page.locator("[data-test='password']");
    this.loginButton = page.locator("[data-test='login-button']");
    this.loginPageBotImage = page.locator(".bot_column");
  }

  async visitUrl() {
    await super.openUrl(testData.baseUrl);
    return await super.waitForPageLoad();
  }

  async verifyLoginPageLogo() {
    return await this.isElementVisible(
      this.loginPageLogo,
      testData.notVisibleText
    );
  }

  async userNameFieldVisible() {
    return await this.isElementVisible(this.userName, testData.notVisibleText);
  }

  async passwordFieldVisible() {
    return await this.isElementVisible(this.password, testData.notVisibleText);
  }

  async loginButtonIsEnabled() {
    return await this.isElementEnabled(
      this.loginButton,
      testData.notEnabledText
    );
  }

  async loginAsStandardUser() {
    await this.fill(this.userName, testData.standardUser);
    await this.fill(this.password, testData.password);
    await this.click(this.loginButton);
  }
}

export default LoginPage;
