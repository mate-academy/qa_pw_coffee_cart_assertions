import { test, expect } from '@playwright/test';

test('Check Cappuccino cup has correct cost', async ({ page }) => {
  await page.goto('https://coffee-cart.app/'); 

  // ToDo: Assert "Cappuccino" cup conatins text '$19.00'
});