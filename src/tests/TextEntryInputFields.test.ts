import { test } from '@playwright/test';
test('Valid to enter Text to Input Fields', async ({ page }) => {
await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
await page.locator('//input[@name ="first_name"]').fill('Mitali')


await page.mouse.wheel(0,1000)
await page.waitForTimeout(20000)
})
