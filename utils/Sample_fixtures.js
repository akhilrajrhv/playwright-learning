import test from "@playwright/test";
//currently used login fixtures for test data

exports.mytest = test.extend({
    userlist: async ({ }, use) => { //de structure
        await use([{
            valid_username: "standard_user",
            valid_password: "secret_sauce"
        },
        {
            valid_username: "problem_user",
            valid_password: "secret_sauce"
        }
        ])
    }
})