import { test, expect } from '@playwright/test';

test('Check Espresso cup has correct cost', async ({ page }) => {
  await page.goto('https://coffee-cart.app/'); 

  // ToDo: Assert "Espresso" cup conatins text '$10.00'
    // Tip: Use the .filter({ has: child })

  const espressoCup = page.getByTestId('Espresso');
  const parent = page.getByRole('listitem').filter({ has: espressoCup })

  await expect(parent).toContainText('$10.00'); 
});