const { expect } = require("@playwright/test");

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginLink = page.getByRole("link", { name: "Login" });
    this.loginUserName = page.getByTestId("login-email");
    this.loginPassword = page.getByTestId("login-password");
    this.loginButton = page.getByTestId("login-submit");
    this.notesDashboardHeading = page.getByRole("link", {
      name: "Home - My Notes",
    });
  }

  async GotoLoginPage(web_url) {
    await this.page.goto(web_url);
  }

  async Login(username, password) {
    await expect.soft(this.loginLink).toBeVisible();
    await this.loginLink.click();
    await this.loginUserName.fill(username);
    await this.loginPassword.fill(password);
    await this.loginButton.click();
    // await expect.soft(this.notesDashboardHeading).toBeAttached();
  }
}
