// playwright.config.js
module.exports = {
  testDir: './tests',
  timeout: 30000,
  retries: 0,
  use: {
    headless: true,
    baseURL: 'https://dev.delekhomes.com',
  },
};