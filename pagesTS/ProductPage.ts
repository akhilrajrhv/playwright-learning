import { expect, Locator, Page } from "@playwright/test"

export class ProductPage {
    page:Page
    page_title:Locator
    sort_dropdown: Locator
    allproduct_title: Locator
    addTocart_button: Locator
    remove_cart_button: Locator
    cart_link:Locator
    get_product_count: number

    constructor(page:Page) {
        this.page = page
        this.page_title = page.locator(".title")
        this.sort_dropdown = page.locator(".product_sort_container")
        this.allproduct_title = page.locator(".inventory_item_name ")
        this.addTocart_button = page.locator(".btn.btn_primary.btn_small.btn_inventory ")
        this.remove_cart_button = page.locator("#remove-sauce-labs-bike-light")
        this.cart_link = page.locator(".shopping_cart_link")
        this.get_product_count=0

    }

    async validate_page_title(expected_titile:string) {
        const get_page_titile = await this.page_title.textContent()
        console.log("Product page titile is:", get_page_titile)
        expect(get_page_titile).toBe(expected_titile)
    }

    async validate_sort(sort_value:string) {
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

    async addto_cart(buy_productname:string) {
        for (let i = 0; i < this.get_product_count; i++) {
            if (await this.page.locator(".inventory_item_description").nth(i).locator(".inventory_item_name ").textContent() == buy_productname) {
                console.log(await this.page.locator(".inventory_item_description").nth(i).locator(".inventory_item_name ").textContent())
                await this.addTocart_button.nth(i).click()
            }
        }
    }

    /*async remove_cart() {
        await this.remove_cart_button.click()
    }*/

      async remove_cart(productName: string) {
        const product = this.page
            .locator(".inventory_item")
            .filter({ hasText: productName })

        await expect(product).toBeVisible()
        await product.getByRole("button", { name: "Remove" }).click()
    }


    async navigateto_cart() {
        await this.cart_link.click()
    }
}