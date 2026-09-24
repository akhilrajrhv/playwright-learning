import test from "@playwright/test";

test("Alert and Modtal test", async({page})=>{
    await page.goto("https://selenium.qabible.in/bootstrap-alert.php")
    const alert_headerlink=page.locator("#alert-modal")
    await alert_headerlink.click()
    const modal_leftnavlink=page.getByRole("link",{name:"Bootstrap Modal"})
    await modal_leftnavlink.click()
     //const launch_button=page.getByRole("button",{name:"Launch modal"}).first()
     const launch_button=page.getByText("Launch modal").first()
     await launch_button.click()
     //const modal_open=page.locator(".modal fade show")
     //const modal_open=page.locator("//div[@id='exampleModalCenter']")//using xpath
     const modal_open=page.getByRole("document")
     const click_savebutton=modal_open.getByRole("button",{name:"Close"}).first()//hanlde modal buttons using modal locator instead of "page."
     await click_savebutton.click()
     //await page.pause()

})