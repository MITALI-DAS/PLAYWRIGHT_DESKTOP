import { expect, test} from '@playwright/test';
test.only('Validation of selecting multiple dynamic items from a dropdown using array', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo')
    //await page.waitForTimeout(5000)
    const allDropDownOptions = page.locator('#multi-select option')//id is used for #
    const data = await allDropDownOptions.allTextContents()
    console.log(data);
    //expect(data).toContain('Ohio')
    const pickOption = page.locator('#multi-select')
    await pickOption.selectOption({index:4})//selecting the 6th country in the dropdown list
    await page.waitForTimeout(10000)//here add a option to refresh the page..to do
   //await page.locator('#printMe').click()//clicking on First selected button
    //const actualOption = page.locator('//p[text() ="First selected option is : "]/span')//this is Fisrt selected text
    await page.locator('//button[text()="First Selected"]').click({force: true})
    await page.waitForTimeout(10000)
    //await page.reload();
    const actualOption = page.locator('//span[@class="genderbutton"]') 
    const actualOptionValue = await actualOption.innerText()
    console.log('actualOptionValue is :',actualOptionValue);
    expect(actualOptionValue).toContain('Ohio')

    } )

    //we hav eto select the ohio and clk on first selected button as its is a dummy URL