import { test} from '@playwright/test';
test('Validation some mouse movement like scroll up down etc', async ({ page }) => {
   await page.goto('https://www.tutorialspoint.com/selenium/practice/horizontal-scroll.php')
   await page.waitForTimeout(7000)
   await page.mouse.wheel(0,1000)//it will scroll to a particulöar position as per x & y coordinate
   //mouse.move willbe used while dragging and dropping purpose
   //await page.mouse.dblclick used to duble clk on some element
   await page.waitForTimeout(7000)
   await page.mouse.up()
   await page.waitForTimeout(7000)
   })