import test from "../fixtures/fixture.js";

test.describe("Login to saucedemo application", () => {
  test("Should verify login to saucedemo application as a standard user", async ({
    loginPage,
  }) => {
    await loginPage.visitUrl();
  });
});
