import test, { expect } from "@playwright/test";
//import {customtest} from "../utils/Login_custom_fixtures"
import { mytest } from "../utils/Sample_fixtures"
import { logintests } from "../utils/TestLogin_fixtures"



test.skip("Demo Project", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/")

    const username_inputfield = page.getByPlaceholder("Username")
    const password_inputfield = page.locator("#password")
    const login_button = page.getByRole("button", { name: 'Login' })

    await username_inputfield.fill("standard_user")
    await password_inputfield.fill("secret_sauce")
    await login_button.click()

    const allproduct_title = await page.locator(".inventory_item_name ").allTextContents() //fetch all content based on the locator
    console.log("Products name availabe on this page:", allproduct_title)
    const product_count = await page.locator(".inventory_item_name ").count() //used to fetch total count based on the locator
    console.log("Total products availabe:", product_count)
    const buy_product = "Sauce Labs Bike Light"
    for (let i = 0; i < product_count; i++) {
        if (await page.locator(".inventory_item_description").nth(i).locator(".inventory_item_name ").textContent() == buy_product) {
            console.log(await page.locator(".inventory_item_description").nth(i).locator(".inventory_item_name ").textContent())
            const addTocart_button = page.locator(".btn.btn_primary.btn_small.btn_inventory ").nth(i)
            await addTocart_button.click()
            await page.waitForTimeout(3000)
        }

    }

    const cart_link = page.locator(".shopping_cart_link")
    await cart_link.click()

    const cart_product = page.locator(".inventory_item_name")
    const getcart_productname = await cart_product.textContent()
    console.log("The product added to the cart is:", getcart_productname)
    expect(getcart_productname).toBe(buy_product)

    const checkout_button = page.getByRole("button", { name: 'Checkout' })
    await checkout_button.click()

    const firstname_input = page.getByPlaceholder("First Name")
    const lastname_input = page.getByPlaceholder("Last Name")
    const zipcode_input = page.getByPlaceholder("Zip/Postal Code")

    await firstname_input.fill("Akhil")
    await lastname_input.fill("Raj")
    await zipcode_input.fill("695200")

    const continue_button = page.locator("#continue")
    await continue_button.click()

    const finish_button = page.locator(".btn.btn_action.btn_medium.cart_button")
    await finish_button.click()

    const expected_message = "Thank you for your order!"
    const success_message = page.locator(".complete-header")
    const actual_success_message = await success_message.textContent()
    console.log("Display success message:", actual_success_message)
    //expect(actual_success_message).toBe(expected_message)
    await expect(page).toHaveURL("https://www.saucedemo.com/checkout-complete.html")//assertion using expected URL
    await page.waitForTimeout(3000)

})

//custom test to understand fixtures
/*const users=[login_data1,login_data2]

for(let user of users){
customtest("Custom fixture test"+user,async({page,user})=>{
    console.log(user)
   // const current_user=user[i]
    await page.goto("https://www.saucedemo.com/")

    const username_inputfield = page.getByPlaceholder("Username")
    const password_inputfield = page.locator("#password")
    const login_button = page.getByRole("button", { name: 'Login' })

    await username_inputfield.fill(user.valid_username)
    await password_inputfield.fill(user.valid_password)
    await login_button.click()
})

}*/

/*mytest("Sample fixture", async ({ page, userlist }) => {

    for (const user of userlist) {
        await page.goto("https://www.saucedemo.com/")

        const username_inputfield = page.getByPlaceholder("Username")
        const password_inputfield = page.locator("#password")
        const login_button = page.getByRole("button", { name: 'Login' })

        await username_inputfield.fill(user.valid_username)
        await password_inputfield.fill(user.valid_password)
        await login_button.click()
    }
})*/
//test using custom login fixtures
logintests("Login using fixtures", async ({ page, loginfixtures }) => {
    await loginfixtures("standard_user", "secret_sauce")
})


