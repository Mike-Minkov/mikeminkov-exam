const { test, expect } = require('@playwright/test');

test('Check add grades page', async ({ page }) => {
    await page.goto('https://mikeminkov-exam.onrender.com/Add-Grade');
    const form = await page.$('input[type="text"]');
    expect(form).toBeTruthy();
  });
  