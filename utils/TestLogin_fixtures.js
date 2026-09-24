import test from "@playwright/test";


//currently used login fixtures for locators
exports.logintests = test.extend({
    loginfixtures: async ({ page }, use) => {

        const login = async (user, pass) => {
            await page.goto("https://www.saucedemo.com/")

            const username_inputfield = page.getByPlaceholder("Username")
            const password_inputfield = page.locator("#password")
            const login_button = page.getByRole("button", { name: 'Login' })
            await username_inputfield.fill(user)
            await password_inputfield.fill(pass)
            await login_button.click()
        }
        await use(login)
    }
})