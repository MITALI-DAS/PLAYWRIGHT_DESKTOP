
//to validate the iframe--small window /frame inside big window/frame
import { test } from '@playwright/test';
test('Valid to frame or Picture', async ({ page }) => {
await page.goto('https://webdriveruniversity.com/IFrame/index.html')
const frame = page.frameLocator('#frame')//for id we use # 
if(frame)
{ 
    for(let i =1 ;i<= 50;i++)
        {
            await frame.locator('//a[@data-slide="next"]/span').click()//for fram we use frame instead of Frame
            console.log(i);
            
        } 

} 
    
await page.waitForTimeout(2000)
})
