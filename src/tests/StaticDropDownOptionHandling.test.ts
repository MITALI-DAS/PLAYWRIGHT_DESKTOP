import { test} from '@playwright/test';
test('Validation finding a static option from the drop down list', async ({ page }) => {
   await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php')
   const stateDropdown = page.locator('//select[@id = "state"]')
   //await scroll.scrollIntoViewIfNeeded()
    //await page.waitForTimeout(7000)
    await page.mouse.wheel(0,1000)
   //await scroll.selectOption({index:2}) Or Like directly enter the name
   //await stateDropdown.selectOption('NCR') OR like directly writing selectByValue
   await stateDropdown.selectOption({value:'NCR'})//this is used for visible text
   await page.waitForTimeout(7000)
})

