//Import test function
import test from "@playwright/test";

//test function have->test titile and async-arrow function
//browser is a inbulit fixtures
test.skip("First test",async ({browser})=>{
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto("https://www.google.com/")
})

//create a new function to laungh amazon
//If have multiple test its only run this test medthod (we use'.only')
//'.skip used for skip the test'
//test.only("Launch amazon", async({browser})=>{
test("Launch amazon", async({browser})=>{
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto("https://www.amazon.in/")

})