const { test, expect } = require('@playwright/test');

const existingEmail = 'user1752269176979@example.com';
const password = 'StrongPass123!';
const fullName = 'John Doe';
const role = 'USER';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('Should register a new account', async ({ page }) => {
  const timestamp = Date.now();
  const email = `user${timestamp}@example.com`;

  await page.click('text=Register');

  await page.fill('input[name="firstName"]', 'John');
  await page.fill('input[name="lastName"]', 'Doe');
  await page.fill('input[name="email"]', email);
  await page.fill('input[name="password"]', password);

  await page.getByRole('button', { name: 'Register' }).click();

  await expect(page.getByText(fullName)).toBeVisible();
  await expect(page.getByText('role: user')).toBeVisible(); // оновлено тут!
});

test('Should not register with existing email', async ({ page }) => {
  await page.click('text=Register');

  await page.fill('input[name="firstName"]', 'John');
  await page.fill('input[name="lastName"]', 'Doe');
  await page.fill('input[name="email"]', existingEmail);
  await page.fill('input[name="password"]', password);

  await page.getByRole('button', { name: 'Register' }).click();

  await expect(page.locator('body')).toContainText(/email.*already|validation failed/i);
});

test('Should not register without required fields', async ({ page }) => {
  await page.click('text=Register');

  await page.getByRole('button', { name: 'Register' }).click();

  await expect(page.getByText('First name required')).toBeVisible();
  await expect(page.getByText('Last name required')).toBeVisible();
  await expect(page.getByText('Email is required')).toBeVisible();
  await expect(page.getByText('Password is required')).toBeVisible();
});