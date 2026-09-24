import test from "@playwright/test";

test("File download test @smoke",async({page})=>{ //tag example
    await page.goto('https://demoqa.com/upload-download')
    const download_promise= page.waitForEvent('download')//wait for download
    const download_button= page.locator('#downloadButton')
    await download_button.click()
    const download_file= await download_promise
    await download_file.saveAs('C:/Users/USER/Desktop/sample_download.jpeg')
   // await page.waitForTimeout(40000)
})