import { LoginPage } from "./LoginPage"
import { ProductPage } from "./ProductPage"
import { CartPage } from "./CartPage"
import { CheckoutPage } from "./CheckoutPage"
import { OverviewPage } from "./OverviewPage"
import { CompletePage } from "./CompletePage"

export class PageManager {
    constructor(page) {
        this.page = page
        this.loginpage = new LoginPage(page)
        this.productpage = new ProductPage(page)
        this.cartpage = new CartPage(page)
        this.checkoutpage = new CheckoutPage(page)
        this.overviewpage = new OverviewPage(page)
        this.completepage = new CompletePage(page)
    }
    //function to retun login page object reference to spec/test file
    get_loginPage() {
        return this.loginpage
    }
    get_productPage() {
        return this.productpage
    }
    get_cartPage() {
        return this.cartpage
    }
    get_checkoutPage() {
        return this.checkoutpage
    }
    get_overviewPage() {
        return this.overviewpage
    }
    get_completePage() {
        return this.completepage
    }
}