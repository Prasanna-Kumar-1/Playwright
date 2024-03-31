import { test, expect } from "../utils/fixtures.js";

test.describe("Login to Notes App", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.GotoLoginPage(
      "https://practice.expandtesting.com/notes/app"
    );
  });
  test("Should login to notes app with valid credentials", async ({
    loginPage,
  }) => {
    await loginPage.Login("prasanna.mallisetty@gmail.com", "");
  });
  test.skip("Skipping this test", async () => {});
});
