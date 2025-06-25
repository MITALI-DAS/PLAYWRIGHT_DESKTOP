import {Page}  from '@playwright/test'
export class LoginPage {
    readonly page:Page;
    readonly userName;
    readonly password ;
    readonly loginButton;

constructor(page:Page){
    this.page = page
    this.userName = page.locator('//input[@name="username"]');
    this.password = page.locator('//input[@name="password"]');
    this.loginButton = page.locator('//button[@type="submit"]');
}

async goto() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

} 
/*async enterUserName(userNameInput:string) 
  {
await this.userName.fill(userNameInput)
} 

async enterPassword(passwordInput:string)  {
    await this.password.fill(passwordInput)
    }

async clickLoginButton()  {
        await this.loginButton.click()
        }*/

async login(userName:string,password:string)
{
await this.userName.fill(userName)
await this.password.fill(password)
await this.loginButton.click()
}
}

