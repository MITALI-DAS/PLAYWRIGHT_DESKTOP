import { test, expect } from '@playwright/test';
import { PopUpHandling2Page} from '../pages/PopupHandling'
test('Valid to login  URL', async ({ page }) => {
const popUpHandling2Page = new PopUpHandling2Page(page)//for every test class we have to create an object and through this object we will call the locatory from Page class

await popUpHandling2Page.goto()
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
        const actualConfirmationele = popUpHandling2Page.actualConfirmationele//Refer to old code
        const confirmationTextValidation = await popUpHandling2Page.actualConfirmationele.textContent()
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
        
         