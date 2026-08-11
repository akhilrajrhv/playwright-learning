import {test,expect} from "@playwright/test";

test("Input form test", async({page})=>{

    await page.goto("https://selenium.qabible.in/")
    //await page.locator("[href='simple-form-demo.php']").click() //finding locator using css selector. If class have same name use href attribute
    //await page.locator(".nav-link").click()// Example of strict mode violation error, if multiple class have same name. "." represent the class
    await page.locator(".nav-link").first().click()//multiple class have same name, use first() to identify first element
    await page.locator(".nav-link").last().click()// click the last class using last()
    await page.locator(".nav-link").nth(1).click()//click the first element using nth() and index
    await page.locator("#single-input-field").fill("This is a test message")// find locator using id. "#" represent the id
    //await page.pause()
})

test.only("Check box test", async({page})=>{
    await page.goto("https://selenium.qabible.in/")
    await page.locator(".nav-link").nth(1).click()
    //await page.locator("[href='check-box-demo.php']").click()
    await page.locator("//a[@href='check-box-demo.php']").click() //using xpath-> //tagname[@attribute='value']
    //await page.locator(".form-check-input").click()
    const checkbox=page.locator(".form-check-input")
    await checkbox.check()
    const ischeck_true=await checkbox.isChecked()//Check if the checkbox is checked then return true or false, its not an assertion, we need to use expect to assert the value
    console.log("Is checkbox checked: "+ischeck_true)
    await expect(ischeck_true).toBeTruthy()// if used this assertion for true condition, then only test is pass
    await expect(checkbox).toBeChecked()//assertion to check the checkbox is checked
    await checkbox.uncheck()
    const ischeck_false=await checkbox.isChecked()
    console.log("Is checkbox checked: "+ischeck_false)
    await expect(ischeck_false).toBeFalsy()// test pass if the checkbox is unchecked
    //await expect(checkbox).not.toBeChecked() //assertion to check the checkbox is not checked
    //await expect(checkbox).toBeChecked()//this asswertion showing error becuase the checkbox is unchecked on the above line
    await page.pause()
})

