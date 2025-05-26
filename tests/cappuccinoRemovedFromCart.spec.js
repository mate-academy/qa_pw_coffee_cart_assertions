import { test, expect } from '@playwright/test';

test('Cappuccino removed from Cart after clicking Remove', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.getByTestId('Cappuccino').click();
  await page.getByLabel('Cart page').click();
  await page.waitForURL('https://coffee-cart.app/cart');
  await page.getByLabel('Remove all Cappuccino').click();
  // ToDo: Assert the message "No coffee, go add some." is visible on the page.
});
