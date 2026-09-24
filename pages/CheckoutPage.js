export class CheckoutPage {
    constructor(page) {
        this.page = page
        this.firstname_input = page.getByPlaceholder("First Name")
        this.lastname_input = page.getByPlaceholder("Last Name")
        this.zipcode_input = page.getByPlaceholder("Zip/Postal Code")
        this.continue_button = page.locator("#continue")
    }

    async enter_personal_information(fname, lname, zip) {
        await this.firstname_input.fill(fname)
        await this.lastname_input.fill(lname)
        await this.zipcode_input.fill(zip)
        await this.continue_button.click()
    }
}