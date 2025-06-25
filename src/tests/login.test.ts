import { test, expect } from '@playwright/test';
import { LoginPage} from '../pages/LoginPage'

test('Valid to login  URL', async ({ page }) => {
const loginPage = new LoginPage(page)
await loginPage.goto()
//await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await loginPage.login('Admin','admin123')
//await loginPage.enterPassword('admin123')
//await loginPage.clickLoginButton()
await page.waitForTimeout(2000)
})
