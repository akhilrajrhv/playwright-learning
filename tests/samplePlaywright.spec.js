import { chromium } from "@playwright/test";
import test from "node:test";

test("Sample page loading",async({})=>{
const browser = await chromium.launch({ headless: false });
const context = await browser.newContext();
const page = await context.newPage();

await page.goto("https://www.amazon.in/");

await browser.close();
})