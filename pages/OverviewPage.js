import { expect } from "@playwright/test"

export class OverviewPage {
    constructor(page) {
        this.page = page
        this.productname = page.locator(".inventory_item_name")
        this.finish_button = page.locator(".btn.btn_action.btn_medium.cart_button")
        this.cancel_button = page.locator("#cancel")
    }
    async click_finish() {
        await this.finish_button.click()
    }

    async click_cancel() {
        await this.cancel_button().click()
    }

    async validate_overview_details(buy_product) {
        const get_productname = await this.productname.textContent()
        console.log("Overview product name:", get_productname)
        expect(get_productname).toBe(buy_product)
    }
}