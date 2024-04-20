import test from "../fixtures/fixture.js";
import { expect } from "@playwright/test";
import { configData } from "../config.js";

test.describe("Login to saucedemo application", () => {
  test("Should verify login to saucedemo application as a standard user", async ({
    loginPage,
  }) => {
    await test.step("Should open the sauce demo application and verify the logo", async () => {
      await loginPage.visitUrl();
      await loginPage.verifyLoginPageLogo();
      expect(await loginPage.getTheTitle()).toBe("Swag Labs");
      expect(await loginPage.getUrl()).toContain("https://www.saucedemo.com/");
    });

    await test.step("Should verify username and password fields are visible on login page", async () => {
      await loginPage.userNameFieldVisible();
      await loginPage.passwordFieldVisible();
    });

    await test.step("Should verify login buttion is enabled", async () => {
      await loginPage.loginButtonIsEnabled();
    });

    await test.step("Should verify login to Sauce demo as standard user", async () => {
      await loginPage.loginAsStandardUser();
    });
  });
});
