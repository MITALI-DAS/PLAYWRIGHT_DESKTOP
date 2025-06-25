import {Page}  from '@playwright/test'
export class PopUpHandling2Page {
    readonly page:Page;
    readonly clickMe;
    readonly actualConfirmationele;


constructor(page:Page){
    this.page = page
    this.clickMe = page.locator('//span[@id="button4"]');
    this.actualConfirmationele = page.locator('#confirm-alert-text');
 
}

async goto() {
    await this.page.goto('https://webdriveruniversity.com/Popup-Alerts/index.html')

}}