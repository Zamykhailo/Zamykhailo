const { test, expect } = require('@playwright/test');
const email = 'user1752269176979@example.com';
const password = 'StrongPass123!';

test('Should log in with existing account', async ({ page }) => {
  await page.goto('https://dev.delekhomes.com/');
  await page.click('text=Login');
  await page.fill('input[name="email"]', email);
  await page.fill('input[name="password"]', password);
  await page.click('button[type="submit"]');
  await expect(page.getByRole('heading', { name: 'Profile' })).toBeVisible();
});

test('Should log in and then log out', async ({ page }) => {
  await page.goto('https://dev.delekhomes.com/');
  await page.click('text=Login');
  await page.fill('input[name="email"]', email);
  await page.fill('input[name="password"]', password);
  await page.click('button[type="submit"]');
  await expect(page.getByRole('heading', { name: 'Profile' })).toBeVisible();
  const profileIcon = page.locator('header button svg').last();
  await profileIcon.click({ force: true });
  await page.getByRole('menuitem', { name: 'Logout' }).click();
  await expect(page.getByText('Login')).toBeVisible();
});