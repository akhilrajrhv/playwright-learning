import { expect, Locator, Page } from "@playwright/test"

export class OverviewPage {
    page:Page
    productname:Locator
    finish_button:Locator
    cancel_button:Locator

    constructor(page:Page) {
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

    async validate_overview_details(buy_product:string) {
        const get_productname = await this.productname.textContent()
        console.log("Overview product name:", get_productname)
        expect(get_productname).toBe(buy_product)
    }
}