import { test,expect } from '@playwright/test';
test('Validation for ToolTip', async ({ page }) => {
   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
     await page.locator('//input[@name ="username"]').fill('Admin')
   await page.locator('//input[@name ="password"]').fill('admin123')
   await page.locator('//button[text() =" Login "]').click()
   
await page.waitForTimeout(2000)
await page.mouse.wheel(0,1000)
await page.waitForTimeout(20000)
   const toolTip = page.locator('//button[@title ="Assign Leave"]')
await toolTip.hover()
await page.waitForTimeout(7000)
await page.screenshot({path:'C:/Users/mital/Desktop/PLAYWRIGHT/screenshotToolTip22.png'})
//await page.waitForTimeout(200000)
const title = await toolTip.getAttribute('title')
console.log(title);
expect(title).toBe('Assign Leave')
//await page.screenshot({path:'C:/Users/mital/Desktop/PLAYWRIGHT/screenshotToolTip.png'})
await page.waitForTimeout(2000)
})