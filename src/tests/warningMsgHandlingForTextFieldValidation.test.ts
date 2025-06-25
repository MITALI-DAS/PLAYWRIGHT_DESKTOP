
//to validate the text field entry is mandatory and handling warning message
import { test } from '@playwright/test';
test('Valid to enter Text to Input Fields', async ({ page }) => {
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await page.locator('//button[@type ="submit"]').click()

const actualMessage = page.locator('//input[@name="username"]/parent::div/parent::div/span')//Variable declared to locator of OK button
const TextValidation = await actualMessage.textContent()//textContent() is a method to get the content of the variable(above)

const expectedTextValidation = 'Required'//variable declared andValue of variable
if(expectedTextValidation === TextValidation)   
{ 
 console.log('Mandatory fields should be filled out');
 
}
else
{ 
     console.log('Mandatory fields is already filled out');
}
await page.waitForTimeout(2000)
})