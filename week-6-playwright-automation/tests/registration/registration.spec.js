import { test, expect } from '@playwright/test';

const password = '12312fdsdfs';
const fullName = 'Adam Sendler';
const roleText = 'role: user';
const existingEmail = 'user1752269176979@example.com';

test.beforeEach(async ({ page }) => {
  await page.goto('https://dev.delekhomes.com/');
});

test('Should register a new user with unique email', async ({ page }) => {
  const timestamp = Date.now();
  const uniqueEmail = `user${timestamp}@example.com`;

  await page.getByRole('link', { name: 'Register' }).click();

  await page.getByRole('textbox', { name: 'First name' }).fill('Adam');
  await page.getByRole('textbox', { name: 'Last name' }).fill('Sendler');
  await page.getByRole('textbox', { name: 'Email address' }).fill(uniqueEmail);
  await page.getByRole('textbox', { name: 'Password' }).fill(password);

  await page.getByRole('button', { name: 'Register' }).click();

  await expect(page.getByText(fullName)).toBeVisible();
  await expect(page.getByText(roleText)).toBeVisible();
});

test('Should not register with existing email', async ({ page }) => {
  await page.getByRole('link', { name: 'Register' }).click();

  await page.getByRole('textbox', { name: 'First name' }).fill('John');
  await page.getByRole('textbox', { name: 'Last name' }).fill('Doe');
  await page.getByRole('textbox', { name: 'Email address' }).fill(existingEmail);
  await page.getByRole('textbox', { name: 'Password' }).fill(password);

  await page.getByRole('button', { name: 'Register' }).click();

  await expect(page.locator('body')).toContainText(/email.*already|validation failed|exists/i);
});

test('Should not register without required fields', async ({ page }) => {
  await page.getByRole('link', { name: 'Register' }).click();

  await page.getByRole('button', { name: 'Register' }).click();

  await expect(page.locator('text=/first name.*required/i')).toBeVisible();
  await expect(page.locator('text=/last name.*required/i')).toBeVisible();
  await expect(page.locator('text=/email.*required/i')).toBeVisible();
  await expect(page.locator('text=/password.*required/i')).toBeVisible();
});