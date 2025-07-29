const { test, expect } = require('@playwright/test');

test('Should login via token and open dashboard', async ({ browser }) => {
  const context = await browser.newContext({
    storageState: {
      cookies: [],
      origins: [
        {
          origin: 'https://dev.delekhomes.com',
          localStorage: [
            {
              name: 'accessToken',
              value: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjExNjQsInVzZXJuYW1lIjoiamlvbiIsInVzZXJfc3VybmFtZSI6ImR1byIsImVtYWlsIjoiYXNkZnJlQGdtYWlsLmNvbSIsImlhdCI6MTc1Mzc1MDkzMywiZXhwIjoxNzU2MzQyOTMzfQ.1ZACxAUxvlwKG_p8jF9aHG7EQv_t0P5CRkgIft9pmuI'
            }
          ]
        }
      ]
    }
  });

  const page = await context.newPage();
  await page.goto('https://dev.delekhomes.com/dashboard');
  await expect(page).toHaveURL(/dashboard/);
});