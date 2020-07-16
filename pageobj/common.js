const EC = protractor.ExpectedConditions;
const { Logger } = require('../config/Logger');

class Common {
	constructor() {
		this.usernameField = element(by.id('id'));
		this.passwordField = element(by.id('pw'));
		this.logInButton = element(by.className('login-text'));
		this.addButton = element(by.className('add-button'));
		this.saveButton = element(by.buttonText('Save'));
		this.goalsMenuButton = element(by.buttonText('Goals'));
		this.preretirementMenuButtonV2 = element(by.cssContainingText('.workflow-list-item', 'Pre-Retirement Goal'));
		this.incomeMenuButton = element(by.buttonText('Income'));
		this.employmentMenuButtonV2 = element(by.cssContainingText('.workflow-list-item', 'Employment'));
		this.insuranceMenuButton = element(by.buttonText('Insurance'));
		this.termlifeMenuButtonV2 = element(by.cssContainingText('.workflow-list-item', 'Term Life'));
	}

	async clickAddButton() {
		Logger.info('clicking add button');
		const el = this.addButton;
		browser.wait(EC.elementToBeClickable(el));
		await el.click();
	}

	async clickSaveButton() {
		Logger.info('clicking save button');
		const el = this.saveButton;
		browser.wait(EC.elementToBeClickable(el));
		await el.click();
	}

	async clickGoalsMenuButton() {
		Logger.info('clicking goals menu button');
		const el = this.goalsMenuButton;
		browser.wait(EC.elementToBeClickable(el));
		await el.click();
	}
	async clickIncomeMenuButton() {
		Logger.info('clicking income menu button');
		const el = this.incomeMenuButton;
		browser.wait(EC.elementToBeClickable(el));
		await el.click();
	}
	async clickInsuranceMenuButton() {
		Logger.info('clicking insurance menu button');
		const el = this.insuranceMenuButton;
		browser.wait(EC.elementToBeClickable(el));
		await el.click();
	}
}

module.exports = Common;
