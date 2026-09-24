import { expect } from "@playwright/test"
export class CompletePage {
    constructor(page) {
        this.page = page
        this.success_message = page.locator(".complete-header")
        this.open_leftnav = page.locator("#react-burger-menu-btn")
        this.logout_leftnav_link = page.locator("#logout_sidebar_link")
    }

    async validate_success_message(expected_message) {

        const actual_success_message = await this.success_message.textContent()
        console.log("Display success message:", actual_success_message)
        expect(actual_success_message).toBe(expected_message)
        //await expect(page).toHaveURL("https://www.saucedemo.com/checkout-complete.html")//assertion using expected URL
    }

    async validate_logout(expected_url) {
        await this.open_leftnav.click()
        await this.logout_leftnav_link.click()
        expect(this.page).toHaveURL(expected_url)

    }
}