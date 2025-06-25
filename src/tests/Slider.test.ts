import { test} from '@playwright/test';
test('Validation of AgesliderIncrementAndDecrement', async ({ page }) => {
    await page.goto('https://www.tutorialspoint.com/selenium/practice/slider.php')
    await page.waitForTimeout(4000)
    const ageSlider = page.locator('//input[@id = "ageInputId"]')
    const sliderBox = await ageSlider.boundingBox()//default function which will give the x and y values
   if(!sliderBox) return
    const xAxis = sliderBox.x+sliderBox.width/2 //total size is devided to half or can be devided by 4 or some value
    const yAxis = sliderBox.y+sliderBox.height/2
    let sliderX = sliderBox.x+20//each time slider will move to 20%..it can be anything
    for(let i=1;i<= 5; i++)
    {
      await page.mouse.move(xAxis,yAxis)
      await page.mouse.down()//forward move...it varries from case to case
      await page.waitForTimeout(1000)
      await page.mouse.move(sliderX,yAxis)
      await page.mouse.up()//backword move..it varries from case to case
      await page.waitForTimeout(1000)
     

    }
})