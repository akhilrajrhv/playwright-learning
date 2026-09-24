import test from "@playwright/test";

test("Multiple Window test", async ({ page, context }) => { //context fixture handling fresh tab
    await page.goto("https://selenium.qabible.in/window-popup.php")
    const click_facebook_button = page.getByRole('link', { name: "Like us On Facebook" })

    const [childwindow] = await Promise.all([context.waitForEvent('page'), await click_facebook_button.click()])
    await childwindow.waitForLoadState()
    const child_window_gettitle = await childwindow.title()
    console.log(child_window_gettitle)
    await childwindow.locator("//input[starts-with(@id, '_r_') and @name='email']").fill("akhiltest123@gmail.com")
    //await childwindow.getByRole('textbox',{name:"email"}).fill("test123@gmail.com")
    await childwindow.getByRole('button', { name: "Log in" }).click()

    //handle inner window
    await childwindow.close()
    //await page.pause()
})