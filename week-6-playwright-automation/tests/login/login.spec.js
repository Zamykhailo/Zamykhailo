const { test, expect } = require('@playwright/test');

const email = 'user1752269176979@example.com';
const password = 'StrongPass123!';
const fullName = 'John Doe';
const roleText = 'role: user';

test.beforeEach(async ({ page }) => {
  await page.goto('https://dev.delekhomes.com/auth/login');
});

test('Should log in with existing account', async ({ page }) => {
  await page.getByRole('textbox', { name: 'Email address' }).fill(email);
  await page.getByRole('textbox', { name: 'Password' }).fill(password);

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText(fullName)).toBeVisible();
  await expect(page.getByText(roleText)).toBeVisible();
});

test('Should log in and then log out', async ({ page }) => {
  await page.getByRole('textbox', { name: 'Email address' }).fill(email);
  await page.getByRole('textbox', { name: 'Password' }).fill(password);

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText(fullName)).toBeVisible();
  await expect(page.getByText(roleText)).toBeVisible();

  const profileMenuButton = page.locator('header button').last();
  await profileMenuButton.click();

  const logoutItem = page.getByRole('menuitem', { name: 'Logout' });
  await logoutItem.waitFor();
  await logoutItem.click();

  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});