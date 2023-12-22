const { test, expect } = require('@playwright/test');

test('Check add grades page', async ({ page }) => {
    await page.goto('http://localhost:8080/Add-Grade');
    const form = await page.$('input[type="text"]');
    expect(form).toBeTruthy();
  });
  