import { test, expect } from "@playwright/test";
const { chromium } = require("playwright");

test("Should login to notes app", async ({ page }) => {
  const browser = await chromium.launch({ headless: false });
  await page.goto("/notes/app");
  await page.pause();

  const loginLink = page.getByRole("link", { name: "Login" });
  const loginUserName = page.getByTestId("login-email");
  const loginPassword = page.getByTestId("login-password");
  const loginButton = page.getByTestId("login-submit");
  const notesDashboardHeading = page.getByTestId("home");

  await loginLink.click();
  await loginUserName.fill("prasanna.mallisetty@gmail.com");
  await loginPassword.fill("@Oasis1312@");
  await loginButton.click();
  await expect(notesDashboardHeading).toHaveText("MyNotes");
});
