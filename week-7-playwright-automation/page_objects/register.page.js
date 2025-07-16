// page_objects/register.page.js

class RegisterPage {
  constructor(page) {
    this.page = page;
    this.registerLink = page.getByRole('link', { name: 'Register' });
    this.firstNameInput = page.getByRole('textbox', { name: 'First name' });
    this.lastNameInput = page.getByRole('textbox', { name: 'Last name' });
    this.emailInput = page.getByRole('textbox', { name: 'Email address' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.registerButton = page.getByRole('button', { name: 'Register' });
    this.fullNameText = (name) => page.getByText(name);
    this.roleText = (role) => page.getByText(`role: ${role}`);
    this.bodyLocator = page.locator('body');

    // Errors
    this.firstNameRequiredError = page.locator('text=/first name.*required/i');
    this.lastNameRequiredError = page.locator('text=/last name.*required/i');
    this.emailRequiredError = page.locator('text=/email.*required/i');
    this.passwordRequiredError = page.locator('text=/password.*required/i');
  }

  async goto() {
    await this.page.goto('https://dev.delekhomes.com/');
  }

  async openRegisterForm() {
    await this.registerLink.click();
  }

  async fillForm({ firstName, lastName, email, password }) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
  }
  async submit() {
    await this.registerButton.click();
  }
}

module.exports = { RegisterPage };