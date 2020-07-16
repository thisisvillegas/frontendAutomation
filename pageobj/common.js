const EC = protractor.ExpectedConditions;
const { Logger } = require('../config/Logger');

class Common {
	constructor(browser) {
		this.browser = browser;
        this.usernameField = element(by.id('id'));
		this.passwordField = element(by.id('pw'));
        this.logInButton = element(by.className('login-text'));
        this.addButton =  element(by.className('add-button'))
        this.saveButton =  element(by.buttonText('Save'))
	}

	goToUrl(url) {
		Logger.info(`Navigating to ${url}`);
		browser.get(url);
    }
    
    async clickAddButton() {
        Logger.info('Clicking add button')
        const el = this.addButton
        browser.wait(EC.elementToBeClickable(el));
		await el.click();
    }

    async clickSaveButton() {
        Logger.info('Clicking Save button')
        const el = this.saveButton
        browser.wait(EC.elementToBeClickable(el));
		await el.click();
    }

	async goToUrlAndWait(url, wait_url) {
		await this.goToUrl(url);
		await browser.wait(EC.urlContains(wait_url, 60000));
	}

	async clickButtonWithText(name) {
		Logger.info('Clicking button text ' + name);
		const el = element(by.buttonText(name));
		browser.wait(EC.elementToBeClickable(el));
		await el.click();
	}

	async clickElementWithText(text) {
		const el = element(by.xpath(`//div[contains(text(), "${text}")]`));
		browser.wait(EC.elementToBeClickable(el));
		await el.click();
	}

	async clickLinkText(text) {
		const el = element(by.linkText(text));
		browser.wait(EC.elementToBeClickable(el));
		await el.click();
	}

	async clickDropdownText(text) {
		Logger.info('Clicking dropdown text ' + text);
		const el = element(by.xpath(`//div[contains(@class, 'echo-component-EchoDropDown')]//li//*[text()='${text}']`));
		browser.wait(EC.elementToBeClickable(el));
		await el.click();
	}


	waitForButtonTextToBePresent(text) {
		Logger.info('Waiting for button text ' + text);
		const el = element(by.buttonText(text));
		return el.isPresent();
	}

	
}

module.exports = Common;
