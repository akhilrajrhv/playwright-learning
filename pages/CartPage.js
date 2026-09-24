import { expect } from "@playwright/test";

export class CartPage {
    constructor(page) {
        this.page = page;
        this.cart_product = page.locator(".cart_item .inventory_item_name");
        this.checkout_button = page.getByRole("button", { name: "Checkout" });
    }

    async validate_cart_items(buy_productname) {
        await expect(this.cart_product).toHaveText(buy_productname);
        console.log("The product added to the cart is:", await this.cart_product.textContent());
    }

    async click_cart_checkout() {
        await this.checkout_button.click();
    }
}
