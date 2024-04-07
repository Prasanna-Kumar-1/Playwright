import { test as base } from "@playwright/test";
import LoginPage from "../pages/LoginPage";

const test = base.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});

export default test;
