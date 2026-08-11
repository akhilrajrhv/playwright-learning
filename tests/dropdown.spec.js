import { test,expect } from "@playwright/test"

test("Dropdown test",async({page})=>{
    await page.goto("https://selenium.qabible.in/")
    const input_link=page.getByRole("link",{name:"Input Form"})
    await input_link.click()
    const selectinput_link=page.getByRole("link",{name:"Select Input"})
    await selectinput_link.click()

    const color_dropdown_parent=page.locator(".card-body").first() //find the parent element of the dropdown
    const color_dropdown=await color_dropdown_parent.locator(".form-control") //find the dropdown element inside the parent element .this is chaining
    await color_dropdown.selectOption("Yellow")//select the option using value
    const color=await color_dropdown.inputValue()//fetch the selected inputvalue of the dropdown
    console.log("Color selected from dropdown is->"+color)
    const selected_color=page.locator("#message-one")
    const selected_color_text=await selected_color.textContent()//fetch the text content of the selected color
    console.log("Success message text is->"+selected_color_text)
    expect(selected_color_text).toContain(color)//assertion to check the selected color is same as the input value
    //expect(selected_color_text).tohaveText(color)//assertion to check the selected color is same as the input value
    //expect(selected_color_text).toContain("Selected Color : "+color)
    await page.pause()
})