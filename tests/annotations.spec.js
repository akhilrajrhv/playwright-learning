import test from "@playwright/test";

test.skip("Skip Annotation",async()=>{
    console.log("This annotation skip this test")
})

//faceing issue on jenkins
/*test.fail("Fail Annotation",async()=>{
    console.log("Marks the test as failing")
})*/

test.fixme("Fixme Annotation",async()=>{
    console.log("Marks this for future fix")
})

test("Test without using annotations",async()=>{
    console.log("This is a normal test")
})

test("Slow Annotation",async()=>{
    test.slow()
    console.log("Marks the test as slow and triples the test timeout")
})