import BasePage from "./BasePage";
import testData from "../data/testData.json";
import {
  loginPageLogo,
  username,
  password,
  loginButton,
} from "../pageobjects/loginPage";

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
  }

  async visitUrl() {
    await super.openUrl(testData.baseUrl);
    return await super.waitForPageLoad();
  }

  async verifyLoginPageLogo() {
    return await this.isElementVisible(loginPageLogo, testData.notVisibleText);
  }

  async userNameFieldVisible() {
    return await this.isElementVisible(username, testData.notVisibleText);
  }

  async passwordFieldVisible() {
    return await this.isElementVisible(password, testData.notVisibleText);
  }

  async loginButtonIsEnabled() {
    return await this.isElementEnabled(loginButton, testData.notEnabledText);
  }

  async loginAsStandardUser() {
    await this.fillTheData(username, testData.standard_user);
    await this.fillTheData(password, testData.password);
    await this.click(loginButton);
  }
}

export default LoginPage;
