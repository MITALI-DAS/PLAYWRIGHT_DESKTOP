import { test } from '@playwright/test';
test('Valid to FileUpload', async ({ page }) => {
await page.goto('https://demoqa.com/automation-practice-form')
await page.setInputFiles('#uploadPicture','C:/Users/mital/Desktop/MD/git.txt')//use the file properties to get this path and use backslash

await page.waitForTimeout(2000)
const scroll = page.locator('#uploadPicture')
await scroll.scrollIntoViewIfNeeded()
await page.waitForTimeout(2000)
})
