import test, { expect } from "@playwright/test";

test("Date picker test", async({page})=>{
    await page.goto("https://selenium.qabible.in/drag-drop.php")
    const source_drag=page.getByText("Draggable n°1")
    const destination_drop=page.locator("#mydropzone")
    await source_drag.hover() //for hovering
    await page.waitForTimeout(3000)
    await source_drag.dragTo(destination_drop)//method used to drag and drop
    await page.waitForTimeout(3000)
    //await page.pause()

    //dbclick() for double click
    //await checkbox.click({clickCount:3})
    //cliick(),dblclick(),click){count:3}),click({button:'right'})
})

test("Double click test", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
    const button_copytext=page.getByText("Copy Text")
    await button_copytext.dblclick()
   
    //const value=await radio_button.isChecked()
    //await expect(value).toBe(true)
    //await expect(radio_button).toBeChecked()

    //await page.pause()
})

