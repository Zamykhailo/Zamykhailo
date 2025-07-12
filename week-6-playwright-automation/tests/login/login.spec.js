const { test, expect } = require('@playwright/test');

const email = 'user1752269176979@example.com';
const password = 'StrongPass123!';
const fullName = 'John Doe';
const roleText = 'role: user'; // замінили "USER" на точний текст із UI

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('Should log in with existing account', async ({ page }) => {
  await page.click('text=Login');

  await page.fill('input[name="email"]', email);
  await page.fill('input[name="password"]', password);

  await page.click('button[type="submit"]');

  // Очікування на повне ім’я
  await expect(page.getByText(fullName)).toBeVisible();

  // Очікування на точний текст ролі
  await expect(page.getByText(roleText)).toBeVisible();
});

test('Should log in and then log out', async ({ page }) => {
  await page.click('text=Login');

  await page.fill('input[name="email"]', email);
  await page.fill('input[name="password"]', password);

  await page.click('button[type="submit"]');

  await expect(page.getByText(fullName)).toBeVisible();
  await expect(page.getByText(roleText)).toBeVisible();

  // Клік по останній кнопці в header (меню профілю)
  const profileMenuButton = page.locator('header button').last();
  await profileMenuButton.click();

  // Очікування на Logout і клік
  const logoutItem = page.getByRole('menuitem', { name: 'Logout' });
  await logoutItem.waitFor();
  await logoutItem.click();

  // Перевірка, що знову бачимо Login
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});