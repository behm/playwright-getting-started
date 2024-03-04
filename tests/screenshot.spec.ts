import { test, expect } from '@playwright/test';

test('take screenshot', async ({ page }, workerInfo) => {
    await page.goto('https://playwright.dev/');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);

    // Take screenshot
    await page.screenshot({ path: './screenshots/playwright.dev-' + workerInfo.project.name + '-screenshot.png' });
});

test('take full screenshot', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // Take screenshot
  await page.screenshot({ 
    path: './screenshots/playwright.dev-full-screenshot.png', 
    fullPage: true 
  });
});