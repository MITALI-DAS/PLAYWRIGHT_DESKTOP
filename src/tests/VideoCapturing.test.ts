// tests/video-recording.spec.ts
import { test, expect } from '@playwright/test';
//we have to config playwright-config file for video ncaüpturing
//line num 5 to 11 will remain same in case we perform task for video recording 
test('Video capture example', async ({ browser }) => {
  const context = await browser.newContext({
    recordVideo: {
      dir: 'videos/',         // Directory to save videos(its a folder created in Project view here only)
      size: { width: 1280, height: 720 }, // Optional
    }
  });

  const page = await context.newPage();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('[name="username"]').fill("Admin")
    await page.locator('[name="password"]').fill("admin123")
    await page.locator('//button[@type="submit"]').click()
    await page.waitForTimeout(2000)
});