import {LoginPage} from "..//pagesTS/LoginPage"
import {ProductPage} from "..//pagesTS/ProductPage"
import {CartPage} from "..//pagesTS/CartPage"
import {CheckoutPage} from "..//pagesTS/CheckoutPage"
import {OverviewPage} from "..//pagesTS/OverviewPage"
import {CompletePage} from "..//pagesTS/CompletePage"

import { Page } from "@playwright/test"

export class PageManager {
    loginpage: LoginPage
    productpage: ProductPage
    cartpage: CartPage
    checkoutpage: CheckoutPage
    overviewpage: OverviewPage
    completepage: CompletePage
    constructor(page:Page) {
       // this.page = page
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