import { Page } from "@playwright/test";
import * as selectors from '../utils/selectors.json';

export default class SuncorpLoginPage {

    constructor(public page: Page) {
    }

    async enterCustomerID(customerID: string) {
        await this.page.locator(selectors.SuncorpLoginPage.customerIDInput).type(customerID);
    }

    async enterPassword(password: string) {
        await this.page.locator(selectors.SuncorpLoginPage.passwordInput).type(password);
    }


    async clickLoginButon() {
        await this.page.click(selectors.SuncorpLoginPage.loginButton);
    }

    get getErrorMessage() {
        return this.page.locator(selectors.SuncorpLoginPage.errorMessage).textContent();
    }

}