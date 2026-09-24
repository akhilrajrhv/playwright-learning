import test from "@playwright/test";

test("Frame test", async({page})=>{
    await page.goto("https://demoqa.com/frames")
    const iframe=page.frameLocator("#frame1") //locate frame using frameLocator()
    const get_iframe_text=await iframe.locator("#sampleHeading").textContent()//get frame locator text using frame locator obj refernce
    console.log("Text content display on frame is:",get_iframe_text)
    //await page.waitForEvent(3000)
})

//https://practice.expandtesting.com/shadowdom