//login to url
import { test, expect, Page } from '@playwright/test';//Default line to be used...page is like driver in selenium...page is like an object for the class

test.skip('Valid to register the site_ Test', async ({ page }: { page: Page }) => {  //Default #TEST# to be used
    //page is an object but Page is a class
    //async(keyword) is a function to be used for browser application ..
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') 
    //await page.locator('#input-firstname').fill('asfdhajkfdh')
    //await page.locator('[name="firstname"]').fill("test")
   // await page.locator('//input[@name="firstname"]').fill("mitali")
   //using id
    //await page.locator('#input-firstname').fill('Mitali')
       //using name locator
    //await page.locator('[name = "lastname"]').fill('Das')
   await page.locator('[name = "username"]').fill('Admin')
   await page.locator('[name = "password"]').fill('admin123')
   await page.locator('[class = "oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click()
    await page.waitForTimeout(2000)
    await page.locator('//span[text()="My Info"]').click()//Relative xpath as it will ignore above search and directly start from this point where // IS WRITTEN
    //[]
    //await page.locator('(//input[@placeholder="yyyy-dd-mm"])[1]').fill('2020-25-05')//if directly entering date
    await page.locator('(//div[@class="oxd-date-input"])[1]').click()
    await page.waitForTimeout(2000)
    //https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
})

test('test', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   // await page.getByRole('textbox', { name: 'Username' }).press('CapsLock');
   // await page.getByRole('textbox', { name: 'Username' }).fill('A');
   //await page.getByRole('textbox', { name: 'Username' }).press('CapsLock');
    //await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.locator('//input[@name="username"]').fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'My Info' }).click();
    //await page.locator('div').filter({ hasText: /^Driver's License NumberLicense Expiry Date$/ }).locator('i').click();
   // await page.getByRole('button', { name: '' }).nth(1).click();
   // await page.locator('.oxd-layout-context').click();
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('div').filter({ hasText: /^Driver's License NumberLicense Expiry Date$/ }).locator('i').click();
  await page.getByRole('button', { name: '' }).nth(1).click();
  await page.getByRole('button', { name: '' }).nth(1).click();
  await page.getByRole('button', { name: '' }).nth(1).click();
  await page.getByText('11').click();
  await page.locator('form').filter({ hasText: 'Employee Full' }).locator('i').nth(1).click();
  await page.getByRole('option', { name: 'Algerian' }).click();
  await page.locator('form').filter({ hasText: 'Employee Full' }).locator('i').nth(2).click();
  await page.getByRole('option', { name: 'Married' }).click();
  await page.locator('label').filter({ hasText: 'Female' }).locator('span').click();
    //await page.getByText('123456789101112131415161718192021222324252627282930').click();
  });


