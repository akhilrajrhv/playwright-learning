import test, { expect } from "@playwright/test";

test("Full page and locator Screenshot test", async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/p/download-files_25.html')
    await page.screenshot({ path: "home.png" })//page screenshot
    const input_field=page.locator('#inputText')
    await input_field.screenshot({path: "textarea.png" })
})

test("Visual comparison test", async ({ page }) => {
    await page.goto('https://demoqa.com/upload-download')
    await expect(page).toHaveScreenshot('screen2.png')
})