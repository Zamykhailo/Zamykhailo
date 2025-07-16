// tests/register.spec.js

const { test, expect } = require('@playwright/test');
const { RegisterPage } = require('../page_objects/register.page');

const password = '12312fdsdfs';
const fullName = 'Adam Sendler';
const role = 'user';
const existingEmail = 'user1752269176979@example.com';

test.beforeEach(async ({ page }) => {
  const registerPage = new RegisterPage(page);
  await registerPage.goto();
});

test('Should register a new user with unique email', async ({ page }) => {
  const registerPage = new RegisterPage(page);
  const timestamp = Date.now();
  const uniqueEmail = `user${timestamp}@example.com`;

  await registerPage.openRegisterForm();
  await registerPage.fillForm({
    firstName: 'Adam',
    lastName: 'Sendler',
    email: uniqueEmail,
    password
  });
  await registerPage.submit();

  await expect(registerPage.fullNameText(fullName)).toBeVisible();
  await expect(registerPage.roleText(role)).toBeVisible();
});

test('Should not register with existing email', async ({ page }) => {
  const registerPage = new RegisterPage(page);

  await registerPage.openRegisterForm();
  await registerPage.fillForm({
    firstName: 'John',
    lastName: 'Doe',
    email: existingEmail,
    password
  });
  await registerPage.submit();

  await expect(registerPage.bodyLocator).toContainText(/email.*already|validation failed|exists/i);
});

test('Should not register without required fields', async ({ page }) => {
  const registerPage = new RegisterPage(page);

  await registerPage.openRegisterForm();
  await registerPage.submit();
  await expect(registerPage.firstNameRequiredError).toBeVisible();
  await expect(registerPage.lastNameRequiredError).toBeVisible();
  await expect(registerPage.emailRequiredError).toBeVisible();
  await expect(registerPage.passwordRequiredError).toBeVisible();
});