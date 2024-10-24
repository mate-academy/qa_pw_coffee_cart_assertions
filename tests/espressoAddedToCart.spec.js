import { test, expect } from '@playwright/test';

test('Check Espresso correctly added to the Cart', async ({ page }) => {
  await page.goto('https://coffee-cart.app/'); 
  await page.getByTestId('Espresso').click();
  await page.getByLabel('Cart page').click();
  await page.waitForURL('https://coffee-cart.app/cart');

  // ToDo: Assert that the 'Espresso' text is visible in the Item column
  // ToDo: Assert that the '$10.00 x 1' text is present in the Unit column
  // ToDo: Assert that the '$10.00' text is present in the Total column
  // Tip: Use nth locator and locator('div')

  const cartLocator = page.getByRole('list').nth(1);
  const cartFirstItemLocator = cartLocator.getByRole('listitem').nth(1);
  const cartFirstItemNameLocator = cartFirstItemLocator.locator('div').nth(0); 
  const cartFirstItemUnitLocator = cartFirstItemLocator.locator('div').nth(1); 
  const cartFirstItemTotalLocator = cartFirstItemLocator.locator('div').nth(3); 

  await expect(cartFirstItemNameLocator).toContainText('Espresso'); 
  await expect(cartFirstItemUnitLocator).toContainText('$10.00 x 1'); 
  await expect(cartFirstItemTotalLocator).toContainText('$10.00'); 
});