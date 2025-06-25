import { test} from '@playwright/test';
test('Validation to find a record from a Table', async ({ page }) => {
   await page.goto('https://www.tutorialspoint.com/selenium/practice/webtables.php?#')

//await scroll.scrollIntoViewIfNeeded()
//await page.waitForTimeout(7000)
const rows = page.locator('//table/tbody/tr')//tr use for table row
const rowCount = await rows.count()
console.log(`Total number of Rows: ${rowCount}`);
for(let i =0;i< rowCount;i ++)
   {
      const firstName = await rows.nth(i).locator('td').nth(0).textContent()//td is used for cell value
      const lastName = await rows.nth(i).locator('td').nth(1).textContent()
      console.log('First name : ',firstName);
      console.log('Last name : ',lastName);
      let position:number
      if(firstName === 'Kierra' && lastName === 'Gentry')
         {
           position=i
           console.log('First name and Last name index : ',position);
           //const editButton = page.locator(`//table/tbody/tr[${position}]/td[7]/a[1]`)
           //editButton.click()
           await page.locator(`//table/tbody/tr[${position}]/td[7]/a[1]`).click()
           await page.waitForTimeout(2000)
           await page.locator('(//input[@id ="age"])[2]').fill('33')
           await page.locator('(//input[@type="submit"])[2]').click()
           await page.waitForTimeout(2000)
         }
   }

} )
