import { test as base } from "@playwright/test";
import LoginPage from "../pages/loginPage";
import ProductsPage from "../pages/productsPage";

const test = base.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
});

export default test;
