// tests/login.spec.js

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../page_objects/login.page');

const email = 'user1752269176979@example.com';
const password = 'StrongPass123!';
const fullName = 'John Doe';
const role = 'user';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
});

test('Should log in with existing account', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.login(email, password);

  await expect(loginPage.fullNameText(fullName)).toBeVisible();
  await expect(loginPage.roleText(role)).toBeVisible();
});

test('Should log in and then log out', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.login(email, password);

  await expect(loginPage.fullNameText(fullName)).toBeVisible();
  
  await expect(loginPage.roleText(role)).toBeVisible();

  await loginPage.logout();

  await expect(loginPage.loginButtonAfterLogout).toBeVisible();
});