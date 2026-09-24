import { expect, Locator, Page } from "@playwright/test"

export class LoginPage {

    page:Page
    username_inputfield:Locator
    password_inputfield:Locator
    login_button: Locator
    login_error_message: Locator

    constructor(page:Page) {
        
        this.page = page
        this.username_inputfield = page.getByPlaceholder("Username")
        this.password_inputfield = page.locator("#password")
        this.login_button = page.getByRole("button", { name: 'Login' })
        this.login_error_message = page.locator(".error-message-container.error")
    }

    async navigateurl() {
        await this.page.goto("https://www.saucedemo.com/")
    }
    async invalidUsername_validPassword(username:string, password:string, message:string) {

        await this.username_inputfield.fill(username)
        await this.password_inputfield.fill(password)
        await this.login_button.click()
        const actual_error_message = await this.login_error_message.textContent()
        console.log("Login error message is:", actual_error_message)
        expect(actual_error_message).toContain(message)
    }
    async validUsername_invalidPassword(username:string, password:string, message:string) {

        await this.username_inputfield.fill(username)
        await this.password_inputfield.fill(password)
        await this.login_button.click()
        const actual_error_message = await this.login_error_message.textContent()
        console.log("Login error message is:", actual_error_message)
        expect(actual_error_message).toBe(message)
    }
    async invalidUsername_invalidPassword(username:string, password:string, message:string) {

        await this.username_inputfield.fill(username)
        await this.password_inputfield.fill(password)
        await this.login_button.click()
        const actual_error_message = await this.login_error_message.textContent()
        console.log("Login error message is:", actual_error_message)
        expect(actual_error_message).toEqual(message)
    }
    async valid_credentials(username:string, password:string) {
        await this.username_inputfield.fill(username)
        await this.password_inputfield.fill(password)
        await this.login_button.click()
        expect(this.page).toHaveURL("https://www.saucedemo.com/inventory.html")
    }
}



