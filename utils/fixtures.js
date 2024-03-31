const base = require("@playwright/test");
import { LoginPage } from "../pages/LoginPage";

exports.test = base.test.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});

exports.expect = base.expect;
