import {test,expect} from "@playwright/test";

test("Radio button test", async({page})=>{
    await page.goto("https://selenium.qabible.in/")
    const input_link= page.locator(".nav-link").nth(1)
    await input_link.click()
    const radio_link=page.locator("[href='radio-button-demo.php']")
    await radio_link.click()
    const radio_button=page.getByRole("radio",{name:"Male"}).first()//find locator using getbyrole
    await radio_button.click()
    const value=await radio_button.isChecked()
    expect(value).toBe(true)
    await expect(radio_button).toBeChecked()
    //await page.pause()
})