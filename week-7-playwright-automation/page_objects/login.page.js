// page_objects/login.page.js

class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.getByRole('textbox', { name: 'Email address' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.fullNameText = (fullName) => page.getByText(fullName);
    this.roleText = (role) => page.getByText(`role: ${role}`);
    this.profileMenuButton = page.locator('header button').last();
    this.logoutItem = page.getByRole('menuitem', { name: 'Logout' });
    this.loginButtonAfterLogout = page.getByRole('button', { name: 'Login' });
  }

  async goto() {
    await this.page.goto('https://dev.delekhomes.com/auth/login');
  }
  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
  async logout() {
    await this.profileMenuButton.click();
    await this.logoutItem.waitFor();
    await this.logoutItem.click();
  }
}

module.exports = { LoginPage };