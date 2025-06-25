import { test } from '@playwright/test';
test('Valid to dropdown', async ({ page }) => {
   await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
   //await page.selectOption('//select[@id ="dropdowm-menu-1"]',{index:3})--by index
   await page.selectOption('//select[@id ="dropdowm-menu-1"]','SQL')//by name
   await page.locator("//input[@value ='green']").click()//RadioButtin
   await page.locator("//input[@value='option-1']").click()//CheckBox
   await page.waitForTimeout(2000)
})
