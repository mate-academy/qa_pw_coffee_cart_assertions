import { test, expect } from '@playwright/test';

test('Check Cappuccino cost is added to Total on menu page', async ({ page }) => {
  await page.goto('https://coffee-cart.app/'); 
  await page.getByTestId('Cappuccino').click();

  // ToDo: Assert "Total" button conatins text 'Total: $19.00'
});