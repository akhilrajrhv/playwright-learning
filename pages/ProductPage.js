import { expect } from "@playwright/test"

export class ProductPage {

    constructor(page) {
        this.page = page
        this.page_title = page.locator(".title")
        this.sort_dropdown = page.locator(".product_sort_container")
        this.allproduct_title = page.locator(".inventory_item_name ")
        this.addTocart_button = page.locator(".btn.btn_primary.btn_small.btn_inventory ")
        this.remove_cart_button = page.locator("#remove-sauce-labs-bike-light")
        this.cart_link = page.locator(".shopping_cart_link")

    }

    async validate_page_title(expected_titile) {
        const get_page_titile = await this.page_title.textContent()
        console.log("Product page titile is:", get_page_titile)
        expect(get_page_titile).toBe(expected_titile)
    }

    async validate_sort(sort_value) {
        await this.sort_dropdown.selectOption(sort_value)
        console.log("Selected filter option is:", sort_value)
    }

    async fetchproduct_title() {
        const get_title = await this.allproduct_title.allTextContents()
        console.log("Products name availabe on this page:", get_title)
    }

    async fetchproduct_count() {
        this.get_product_count = await this.allproduct_title.count()
        console.log("Total products availabe:", this.get_product_count)
    }

    async addto_cart(buy_productname) {
        for (let i = 0; i < this.get_product_count; i++) {
            if (await this.page.locator(".inventory_item_description").nth(i).locator(".inventory_item_name ").textContent() == buy_productname) {
                console.log(await this.page.locator(".inventory_item_description").nth(i).locator(".inventory_item_name ").textContent())
                await this.addTocart_button.nth(i).click()
            }
        }
    }

    //fixed code
    async remove_cart(buy_productname) {

        const product = this.page
            .locator(".inventory_item")
            .filter({ hasText: buy_productname })

        await expect(product).toHaveCount(1)

        await product
            .getByRole("button", { name: "Remove" })
            .click()

        console.log("Removed from cart:", buy_productname)
    }


    async navigateto_cart() {
        await this.cart_link.click()
    }
}