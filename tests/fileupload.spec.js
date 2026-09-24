import test, { expect } from "@playwright/test";

test("File upload test ",async({page})=>{
    await page.goto('https://demoqa.com/upload-download')
    const upload_button= page.locator('#uploadFile')
    await upload_button.setInputFiles("C:/Users/USER/Desktop/samplepdf.pdf") //upload single file
    const file_path=await page.locator('#uploadedFilePath').textContent()
    console.log(file_path)
    //await page.waitForTimeout(40000)
    expect(file_path).toContain('samplepdf.pdf')
})

test("Multiple File upload test",{tag:'@smoke'},async({page})=>{ //mention tag to the test titile
    await page.goto('https://testautomationpractice.blogspot.com/p/download-files_25.html')
    const upload_button= page.locator('#multipleFilesInput')
    await upload_button.setInputFiles(['C:/Users/USER/Desktop/samplepdf.pdf',
        'E:/Obaqura_PlaywrightCourse/Playwright/utils/test_data.xlsx'])// upload multiple files
    const click_button=page.getByRole('button',{name:'Upload Multiple Files'})
    await click_button.click()
    //await page.waitForTimeout(40000)
})