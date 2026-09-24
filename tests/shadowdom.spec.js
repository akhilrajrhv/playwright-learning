import test from "@playwright/test";

test("Shadow Dom test", async({page})=>{
    await page.goto("https://practice.expandtesting.com/shadowdom")
    const shadowdom_button_hot=page.locator('#shadow-host')
    const get_buttontext=await shadowdom_button_hot.getByRole('button',{name:"This button is inside a Shadow DOM."}).textContent()
    console.log("Shadow Dom button text content is:",get_buttontext)
})