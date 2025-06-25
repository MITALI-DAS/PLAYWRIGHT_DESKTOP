
//to validate the iframe--small window /frame inside big window/frame
//here we are clicking the our product link and in our product link we are selecting the game picture
//when we are using a frame,make sure to use frame instead of Page ex await frame.locator etc not page.locator

import { test } from '@playwright/test';
test('Valid to click on Mobile game picture', async ({ page }) => {
await page.goto('https://webdriveruniversity.com/IFrame/index.html')

const frame = page.frameLocator('#frame')//here we create an object bas Frame as we will not use page,instead we ll use frame


if(frame)
{ 
    await frame.locator('//a[text()="Our Products"]').click()
    await page.waitForTimeout(2000)
    await frame.locator('//p[text()="Game Consoles"]').click()
} 
    
await page.waitForTimeout(2000)
})