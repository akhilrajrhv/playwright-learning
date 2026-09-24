import test, { expect } from "@playwright/test";
import { PageManager } from "../pages/PageManager";
import testdata from "../utils/swaglabs_testdata.json" 
//const dataobj=JSON.parse(JSON.stringify(testdata))//convert json data to sting then convert to java script objt using .parse

for(const dataobj of testdata){

test("Swag Labs Test Cases JS" + dataobj.buy_product, async ({ page }) => {

    //Object reference for pagemanager page
    let pagemanager=new PageManager(page)

    //for login page test case
    const loginpage=pagemanager.get_loginPage()//pagemanager retun a login reference, here we store in a const, we use this login refe to invoke functions
    await loginpage.navigateurl()
    await loginpage.invalidUsername_validPassword(dataobj.invalid_username,dataobj.valid_password,dataobj.message)
    await loginpage.validUsername_invalidPassword(dataobj.valid_username,dataobj.invalid_password,dataobj.message)
    await loginpage.invalidUsername_invalidPassword(dataobj.invalid_username, dataobj.invalid_password, dataobj.message)
    await page.waitForTimeout(3000)
    await loginpage.valid_credentials(dataobj.valid_username, dataobj.valid_password)

    //for product listing page test case
    const productpage=pagemanager.get_productPage()
    await productpage.validate_page_title(dataobj.expected_product_pagetitile)
    await productpage.validate_sort(dataobj.expected_sort_value)
    await productpage.fetchproduct_title()
    await productpage.fetchproduct_count()
    await productpage.addto_cart(dataobj.buy_product)
    await productpage.remove_cart(dataobj.buy_product)
    await page.waitForTimeout(3000)
    await productpage.addto_cart(dataobj.buy_product)
    await productpage.navigateto_cart()

    //for cart test cases
    const cartpage=pagemanager.get_cartPage()
    await cartpage.validate_cart_items(dataobj.buy_product)
    await cartpage.click_cart_checkout()

    //for checkoutpage test cases
    const checkoutpage=pagemanager.get_checkoutPage()
    await page.waitForTimeout(3000)
    await checkoutpage.enter_personal_information(dataobj.checkout_first_name, dataobj.checkout_last_name, dataobj.checkout_zipcode)

    //for overview page test cases
    const overviewpage=pagemanager.get_overviewPage()
    await overviewpage.validate_overview_details(dataobj.buy_product)
    await overviewpage.click_finish()

    //for complete page test cases
    const completepage=pagemanager.get_completePage()
    await completepage.validate_success_message(dataobj.expected_message)
    await page.waitForTimeout(3000)
    await completepage.validate_logout(dataobj.expected_logout_url)


})
}