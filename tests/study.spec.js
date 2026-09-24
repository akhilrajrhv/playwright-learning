import test, { expect } from "@playwright/test";

test("URL navigation and print title",async({page})=>{
    await page.goto("https://testkru.com/Elements/TextFields")
    const get_page=await page.title()
    console.log("Page titile is:",get_page)
    await page.close()
})

test("Fetch multiple page title",async({page})=>{
    await page.goto("https://testkru.com/Elements/TextFields")
    const textfiled_titile=await page.title()
    console.log("Textfield page titile:",textfiled_titile)
    await page.goto("https://testkru.com/Elements/Buttons")
    const button_titile=await page.title()
    console.log("Textfield page titile:",button_titile)
})

test("Browser forward and back", async({page})=>{
    await page.goto("https://testkru.com/Elements/TextFields")
    await page.goto("https://testkru.com/Elements/Buttons")
    await page.goBack()
    const textfiled_titile=await page.title()
    console.log("Textfield page titile:",textfiled_titile)
    await page.goForward()
    const button_titile=await page.title()
    console.log("Textfield page titile:",button_titile)
})

test("Select element by CSS ID", async({page})=>{
    await page.goto("https://testkru.com/Elements/TextFields")
    const input_field=page.locator('#lastNameWithPlaceholder')
    const input_text=await input_field.getAttribute('placeholder')
    console.log("Placeholder text:",input_text)

})

test("Select by text content", async({page})=>{
    await page.goto("https://testkru.com/Elements/Links")
    const link=page.getByText('Go to Homepage')
    const get_link=await link.getAttribute('href')
    console.log(get_link)

})

test("Select Element by Role",async({page})=>{
    await page.goto("https://testkru.com/Elements/Buttons")
    const Lbutton=page.getByRole('button',{name:"Left click on me"})
    const Lbutton_attribute=await Lbutton.getAttribute('id')
    console.log(Lbutton_attribute)
    const Lbutton_status=await Lbutton.isEnabled()
    console.log(Lbutton_status)
})

test("Select Element by CSS Class and Tag",async({page})=>{
    await page.goto("https://testkru.com/Elements/TextMessages")
    const bold_text=page.locator('#boldText')
    //Gets the element's text content from the DOM.It doesn't care whether the text is currently visible.
    const get_bold_text=await bold_text.textContent()
    //The hidden text is excluded by innerText()
    const inner=await bold_text.innerText()
    console.log(get_bold_text)
    console.log(inner)
})
test("Select Element by XPath",async({page})=>{
    await page.goto("https://testkru.com/Elements/TextFields")
    const input_prefilled=await page.locator("//input[@id='preFilledTextField']").inputValue()
    console.log(input_prefilled)
})
test("Find Multiple Elements",async({page})=>{
    await page.goto("https://testkru.com/Elements/RadioButtons")
    const radio_button=page.locator("//input[@type='radio']")
    const count_radio=await radio_button.count()
    console.log("Total radio button count is:",count_radio)
    const get_attribute=await radio_button.first().getAttribute('id')
    console.log("First attribute text:",get_attribute)
    
})
test("getByLabel and getByPlaceholder",async({page})=>{
     await page.goto("https://testkru.com/Elements/TextFields")
    const lastname_field=page.getByPlaceholder('Enter your last name...')
    const get_attribute=await lastname_field.getAttribute('class')
    await lastname_field.fill("Playwright sample")
    await lastname_field.clear()
    await lastname_field.pressSequentially("Automation sample")
    const get_field_value=await lastname_field.inputValue()
    console.log("Attribute value is:",get_attribute)
    console.log("The enetered value is:",get_field_value)
})
test("Locator Chaining and Filtering",async({page})=>{
    await page.goto("https://testkru.com/Elements/Links")
    const page_link=page.locator('a')
    const link_count=await page_link.count()
    const get_google_link=page_link.filter({hasText:'Google'})
    const link=await get_google_link.getAttribute('href')
    const get_text=await get_google_link.textContent()
    console.log("total link count is:",link_count)
    console.log("Page url is:",link)
    console.log("Text content is:",get_text)
    const second=await page_link.nth(1).getAttribute('href')
    console.log(second)
})
test("Check and Uncheck Checkboxes",async({page})=>{
    await page.goto("https://testkru.com/Elements/Checkboxes")
    const check_box=page.locator("#firstSelect1")
    const current_status=await check_box.isChecked()
    console.log("Current check box status:",current_status)
    await check_box.check()
    console.log("Status after checked",await check_box.isChecked())
    await expect(check_box).toBeChecked()
})
test("nexted checkbox",async({page})=>{
    await page.goto("https://testkru.com/Elements/Checkboxes")
    const parent_arraow=page.locator(".CheckboxesList").first()
    await parent_arraow.click()
    //page.waitForTimeout(2000)
    const child_arrrow=page.locator(".CheckboxesList.CheckboxesList-down")
    await child_arrrow.click()
    //await page.pause()
    
    //const testng_check=page.locator('.form-check-input').filter({hasText:'TestNG'})
    //await testng_check.check()
    //console.log(await testng_check.isChecked()) 
})

test("Nested Frames", async({page})=>{
    await page.goto("https://testkru.com/Interactions/Frames")
    const parent_frame=page.frameLocator('#frame2') //create a obj for parent frame
    const get_parent_text=await parent_frame.locator('h2').textContent()
    console.log("Outer frame content:",get_parent_text)

    const child_frame=parent_frame.frameLocator('iframe[srcdoc="<h3>Child frame</h3>"]')//create a obj for child frame
    const get_child_text=await child_frame.locator('h3').textContent()
    console.log("Inner frame text:",get_child_text)

    const get_main_page=await page.locator('.mb-4').textContent()
    console.log("Main page content:",get_main_page)
})

test("New tab opening", async({page,context})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    const [newPage]=await Promise.all([context.waitForEvent('page'),
        page.getByRole('button',{name:"New Tab"}).click()
    ])

    console.log("Parent page URL:", page.url())
    console.log("Child page url:",newPage.url())
})


