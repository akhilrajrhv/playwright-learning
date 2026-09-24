import test, { expect } from "@playwright/test";

test("Date picker test", async({page})=>{
    await page.goto("https://selenium.qabible.in/date-picker.php")
    const click_calendar=page.locator(".fa.fa-calendar").first()
    await click_calendar.click()
    const select_year=page.locator(".datepicker-days th.datepicker-switch")
    await select_year.click()
    const click_year=page.locator(".datepicker-months th.datepicker-switch")
    await click_year.click()
    

    const expected_year=1995
    const expected_month=9
    const expected_date=30

while(true){

    const get_yearrange=await page.locator(".datepicker-years th.datepicker-switch").textContent()
    console.log("Year range is:", get_yearrange)

   const start_year=await get_yearrange.split("-")[0]
   console.log("Start year is:", start_year)

   const end_year=await get_yearrange.split("-")[1]
   console.log("End year is:", end_year)

   //const calendar_array[]=await get_yearrange.split("_")

   if(expected_year>=start_year && expected_year<=end_year){
    break
   }

   if(expected_year<start_year){
    //click on previous button
    const click_prevbutton=page.locator(".datepicker-years th.prev")
    await click_prevbutton.click()
   }
   else{
    //click next button
    const click_nextbutton=page.locator(".datepicker-years th.next")
    await click_nextbutton.click()
   }
}

    //const click_expectedyear=page.getByText(expected_year.toString(),{exact:true}).first()
    //fixed code
    //const click_expectedyear= page.locator(".datepicker-years .year")
    const click_expectedyear = page.locator(".datepicker-years .year").filter({ hasText: expected_year.toString() })
    await click_expectedyear.click()

    //await page.locator(".month").nth(expectedmonth-1).click()
    //select date

   const click_expectedmonth= page.locator(".month").nth(expected_month-1)
   await click_expectedmonth.click()

   //const click_expecteddate=page.locator("datepicker-days .day").nth(expected_date)
   const click_expecteddate = page.locator(".datepicker-days .day").filter({hasText: expected_date.toString()}).last()
   await click_expecteddate.click()
   
   const click_showdate=page.locator("#button-one")
   await click_showdate.click()

   const actual_date=await page.locator("#message-one").textContent()
   console.log("Display date:",actual_date)
   const entered_date=await page.locator("#single-input-field").inputValue()
    console.log("Entered date:",entered_date)
   //expect(actual_date).toContain("30/09/1995")
   expect(actual_date).toContain(entered_date)

    //await page.pause()
})