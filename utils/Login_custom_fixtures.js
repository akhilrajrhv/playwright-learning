//for login custom fixtures

import test from "@playwright/test";
exports.customtest = test.extend({

    login_data1: { //login data fixture

        valid_username: "standard_user",
        valid_password: "secret_sauce",
        invalid_username: "invalid_user",
        invalid_password: "invalid_pass",
        message: "Epic sadface: Username and password do not match any user in this service",

        buy_product: "Sauce Labs Bike Light",
        expected_product_pagetitile: "Products",

        expected_sort_value: "lohi",
        checkout_first_name: "Akhil",
        checkout_last_name: "Raj",
        checkout_zipcode: "695500",

        expected_message: "Thank you for your order!",
        expected_logout_url: "https://www.saucedemo.com/"
    },

    login_data2: { //login data fixture

        valid_username: "standard_user",
        valid_password: "secret_sauce",
        invalid_username: "invalid_user",
        invalid_password: "invalid_pass",
        message: "Epic sadface: Username and password do not match any user in this service",

        buy_product: "Sauce Labs Fleece Jacket",
        expected_product_pagetitile: "Products",

        expected_sort_value: "lohi",
        checkout_first_name: "Akhil",
        checkout_last_name: "Raj",
        checkout_zipcode: "695500",

        expected_message: "Thank you for your order!",
        expected_logout_url: "https://www.saucedemo.com/"
    }
})