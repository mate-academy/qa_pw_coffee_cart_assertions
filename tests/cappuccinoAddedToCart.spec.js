import { test, expect } from '@playwright/test';

test('Cappuccino correctly added to the Cart', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.getByTestId('Cappuccino').click();
  await page.getByLabel('Cart page').click();
  await page.waitForURL('https://coffee-cart.app/cart');
  // ToDo: Assert that the 'Cappuccino' text is visible in the Item column
  // ToDo: Assert that the '$19.00 x 1' text is present in the Unit column
  // ToDo: Assert that the '$19.00' text is present in the Total column
  // Tip: Use nth locator and locator('div')
});
