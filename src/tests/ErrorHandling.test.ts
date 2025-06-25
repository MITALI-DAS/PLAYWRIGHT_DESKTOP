import { test,expect } from '@playwright/test';
test('Validation for Error handling', async ({ page }) => {
   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   await page.locator('//input[@name ="username"]').fill('Mitali')
   await page.locator('//input[@name ="password"]').fill('Mitali')
   await page.locator('//button[text() =" Login "]').click()
   await page.waitForTimeout(2000)
   const errorMessage= page.locator('//p[text() ="Invalid credentials"]')
   //expect is assertion
   await expect(errorMessage).toHaveText('Invalid credentials')

   //Logo Validation
   //const logoValidation = page.locator('(//img[@alt ="orangehrm-logo"])[1]')
   //await expect(logoValidation).toBeVisible()
   //to take the screenshot
   await page.screenshot({path:'C:/Users/mital/Desktop/PLAYWRIGHT/screenshot1.png'})

})