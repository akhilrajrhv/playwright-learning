import { Locator, Page } from "@playwright/test"

export class CheckoutPage {

    page:Page
    firstname_input:Locator
    lastname_input:Locator
    zipcode_input:Locator
    continue_button:Locator

    constructor(page:Page) {
        this.page = page
        this.firstname_input = page.getByPlaceholder("First Name")
        this.lastname_input = page.getByPlaceholder("Last Name")
        this.zipcode_input = page.getByPlaceholder("Zip/Postal Code")
        this.continue_button = page.locator("#continue")
    }

    async enter_personal_information(fname:string, lname:string, zip:string) {
        await this.firstname_input.fill(fname)
        await this.lastname_input.fill(lname)
        await this.zipcode_input.fill(zip)
        await this.continue_button.click()
    }
}