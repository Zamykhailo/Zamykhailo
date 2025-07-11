const { test, expect } = require('@playwright/test');

test('Should register a new account', async ({ page }) => {
  const timestamp = Date.now();
  const email = `user${timestamp}@example.com`;
  await page.goto('https://dev.delekhomes.com/');
  await page.click('text=Register');
  await page.fill('input[name="firstName"]', 'John');
  await page.fill('input[name="lastName"]', 'Doe');
  await page.fill('input[name="email"]', email);
  await page.fill('input[name="password"]', 'StrongPass123!');
  await page.getByRole('button', { name: 'Register' }).click();
  await expect(page.getByText('Profile')).toBeVisible();
});

test('Should not register with existing email', async ({ page }) => {
  await page.goto('https://dev.delekhomes.com/');
  await page.click('text=Register');
  await page.fill('input[name="firstName"]', 'John');
  await page.fill('input[name="lastName"]', 'Doe');
  await page.fill('input[name="email"]', 'user1752269176979@example.com');
  await page.fill('input[name="password"]', 'StrongPass123!');
  await page.locator('button[type="submit"]').click();
  const content = await page.locator('body').textContent();
  console.log('💬 PAGE TEXT:\n', content);
  await expect(page.locator('body')).toContainText(/email.*already|validation failed/i);
});

test('Should not register without required fields', async ({ page }) => {
  await page.goto('https://dev.delekhomes.com/');
  await page.click('text=Register');
  await page.click('button[type="submit"]');
  await expect(page.getByText('Email is required')).toBeVisible(); 
  await expect(page.getByText('Password is required')).toBeVisible();
});