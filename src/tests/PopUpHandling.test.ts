import { test } from '@playwright/test';
test('Valid to popup windows', async ({ page }) => {
   await page.goto('https://webdriveruniversity.com/Popup-Alerts/index.html')
//*popup window/Dialogue box we use everytime below 2 lines of code,
// page.on('dialog',async dialogue=>{ 
 //*console.log(dialogue.message());*//
 page.on('dialog',async dialogue=>{ 
 console.log(dialogue.message());
    
 if(dialogue.type() === 'alert')//used for ok Button
    { 
       await dialogue.accept()
    }
 else if(dialogue.type() === 'prompt')//used for Cancel Button
    { 
       await dialogue.dismiss()
    }
else 
    { 
       console.log('pop up confirmation othersite');
        await dialogue.accept()
        const actualConfirmationele = page.locator('#confirm-alert-text')//Variable declared to locator of OK button
        const confirmationTextValidation = await actualConfirmationele.textContent()//textContent() is a method to get the content of the variable(above)

        const expectedConfirmation = 'You pressed OK!'//variable declared andValue of variable
        if(expectedConfirmation === confirmationTextValidation)
            { 
                console.log('Validation passed');
                
              }   
        else     
        { 
                console.log('Validation Failed');
                
              }   
    }
 })
  await page.locator("//span[@id='button4']").click()
  await page.waitForTimeout(5000)
 
})

