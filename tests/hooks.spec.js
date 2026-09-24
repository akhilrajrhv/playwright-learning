import test from "@playwright/test";

test.describe("Grouping test", async () => { //describe used for test grouping


    test("First test", async ({ page }) => {
        console.log("First test invoked")
    })

    test("Second test", async ({ page }) => {
        console.log("Second test invoked")
    })

    test.beforeAll("Before all hooks", async ({ browser }) => {
        console.log("This run before all test cases..Welcome")
    })

    test.afterAll("After all hooks", async ({ browser }) => {
        console.log("This run after all test cases..Thank you!")
    })
    test.beforeEach("Before each hooks", async ({ browser }) => {
        console.log("This works before each test cases..")
    })
    test.afterEach("After each hooks", async ({ browser }) => {
        console.log("This works after each test cases..")
    })

})

//assigment->annotations