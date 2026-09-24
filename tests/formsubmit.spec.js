import  {test,expect} from "@playwright/test";

test("Form Submit test",async({page})=>{
    await page.goto("https://selenium.qabible.in/form-submit.php")
    
    const inputfield_firstname=page.getByPlaceholder("First name")
    await inputfield_firstname.fill("Akhil")
   
    const inputfield_lastname=page.locator("#validationCustom02")
    await inputfield_lastname.fill("Raj")

    const inputfield_username=page.locator('input[type="text"][id="validationCustomUsername"]')//locate username field with both class & id using input tag
    await inputfield_username.fill("akhil@123")

    const inputfield_city=page.locator('.form-control#validationCustom03')//locate with both class & id
    await inputfield_city.fill("Kochi")

    const inputfield_state=page.locator("#validationCustom04")
    await inputfield_state.fill("Kerala")

    const inputfield_zip=page.locator("#validationCustom05")
    await inputfield_zip.fill("695587")

    const checkbox_agree=page.locator("#invalidCheck")
    await checkbox_agree.check()

    const button_submitform=page.getByRole("button",{name:"Submit form"})
    await button_submitform.click()
    const success_message=page.locator(".my-2")
    const visible_status=await success_message.isVisible()//just checking the success message is visible or not
    console.log(visible_status)
    await expect(visible_status).toBeTruthy()//assertion for the message is visbile
    //await expect(visible_status).toBeFalsy()
    
    const actual_message=await success_message.textContent()
    console.log(actual_message)

    const expected_message="Form has been submitted successfully!"
    //expect (actual_message).toContain(expected_message)
    //expect(expected_message).toEqual(actual_message)
    //expect(success_message).toHaveText(expected_message)// use locator and expected message
    //await expect(success_message).toBeVisible() //assertion checked with message locator
    //await expect(success_message).not.toBeVisible()
   
    //await page.pause()
})