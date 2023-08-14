import { test } from "@playwright/test";

test("Adding a New Note", async ({ page }) => {
  await page.goto("https://practice.expandtesting.com/notes/app");
  const loginBtn = page.getByRole("link", { name: "Login" });
  await loginBtn.waitFor();
  page.getByRole("link", { name: "Login" }).click();
  const emailAddress = page.getByTestId("login-email");
  await emailAddress.waitFor();
  const pwd = page.getByTestId("login-password");
  await emailAddress.waitFor();
  const loginButton = page.getByTestId("login-submit");
  await loginButton;
});
