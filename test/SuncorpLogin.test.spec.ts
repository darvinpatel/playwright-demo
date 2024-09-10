import { test, expect } from "@playwright/test";
import SuncorpLoginPage from "../page/SuncorpLogin.page";
import * as users from "../data/credentials.json";

test.describe("Login Feature @suncorplogin", async () => {

    let suncorploginPage: SuncorpLoginPage;

    test.beforeEach(async ({ page, baseURL }) => {
        suncorploginPage = new SuncorpLoginPage(page);
        await page.goto(`${baseURL}`);
    })

    test("Negative: user tries to login with incorrect credentials.", async ({ page }) => {

        await suncorploginPage.enterCustomerID(users.suncorp.username);
        await suncorploginPage.enterPassword(users.suncorp.password);
        await suncorploginPage.clickLoginButon();

        await expect(page.locator('#simpleErrorBox')).toContainText('This is an invalid combination of Internet Banking Customer ID, Internet Banking Password and Token Code - please re-enter your details. Your Internet Banking password is case sensitive so ensure your CAPS lock is not on. If you have a security token or use the Suncorp Bank Secured App you must enter a token code to login.');
    });

})