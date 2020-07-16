// const EC = protractor.ExpectedConditions;
const Common = require('./pageobj/common');
const { Logger } = require('./config/Logger');

describe('Automation Exercise\n', () => {
	beforeAll(async () => {
		common = new Common();
		browser.waitForAngularEnabled(false);
		Logger.info('fetching site');
		browser.get('https://ca-test.planwithvoyant.com/advisergo');
		browser.sleep(2000);

		Logger.info('entering Credentials');
		common.usernameField.sendKeys('voyant-exercise');
		common.passwordField.sendKeys('password100');
		common.logInButton.click();
	});

	it('Adding a new client', async () => {
		common.clickAddButton();
		browser.sleep(1000);

		Logger.info('entering New Client Data');
		element(by.id('newInputFirst')).sendKeys('Kai');
		element(by.id('newInputLast')).sendKeys('Ryssdal');
		element(by.id('newPersonInputBirthday')).sendKeys('1967');

		common.clickSaveButton();
		browser.sleep(5000);

		const title = await browser.getTitle();

		expect(title).toBe('Dashboard');
		expect(element(by.buttonText('Ryssdal, Kai')).isPresent()).toBe(true);
		expect(element(by.cssContainingText('.no-data-description', 'No Cash Flow in Base Plan')).isPresent()).toBe(true);
		browser.takeScreenshot();
	});

	it('Should add Pre-retirement Amount', () => {
		common.clickAddButton();
		expect(element(by.cssContainingText('.add-button-menu', 'Planning Essentials')).isPresent()).toBe(true);
		common.clickGoalsMenuButton();
		browser.sleep(1000);
		expect(element(by.cssContainingText('.col-xs-8', 'Goals')).isPresent()).toBe(true);
		common.preretirementMenuButtonV2.click();
		browser.sleep(1000);

		Logger.info('entering pre-retirement amount');
		element(by.id('basicExpenseInputAmount')).sendKeys('1000');

		common.clickSaveButton();
		browser.sleep(5000);

		element(by.cssContainingText('.accordion-label', 'Goals')).click();

		expect(browser.getTitle()).toBe('Dashboard');
		expect(element(by.buttonText('Ryssdal, Kai')).isPresent()).toBe(true);
		expect(element(by.cssContainingText('.col-xs-3', '$1,000')).isPresent()).toBe(true);
		expect(element(by.cssContainingText('.no-data-description', 'No Cash Flow in Base Plan')).isPresent()).toBe(false);
		browser.takeScreenshot();
	});

	it('Should add new employment data', () => {
		common.clickAddButton();
		expect(element(by.cssContainingText('.add-button-menu', 'Planning Essentials')).isPresent()).toBe(true);
		common.clickIncomeMenuButton();
		browser.sleep(1000);
		expect(element(by.cssContainingText('.col-xs-8', 'Income')).isPresent()).toBe(true);
		common.employmentMenuButtonV2.click();
		browser.sleep(1000);

		Logger.info('entering new employment data');
		element(by.id('employmentInputName')).sendKeys('Voyant');
		element(by.id('employmentInputSalary')).sendKeys('110000');

		common.clickSaveButton();
		browser.sleep(5000);

		element(by.cssContainingText('.accordion-label', 'Income')).click();

		expect(browser.getTitle()).toBe('Dashboard');
		expect(element(by.buttonText('Ryssdal, Kai')).isPresent()).toBe(true);
		expect(element(by.cssContainingText('.name-text', 'Voyant')).isPresent()).toBe(true);
		expect(element(by.cssContainingText('.col-xs-3', '$110,000')).isPresent()).toBe(true);
		expect(element(by.cssContainingText('.no-data-description', 'No Cash Flow in Base Plan')).isPresent()).toBe(false);
		browser.takeScreenshot();
	});

	it('Should add new insurance data', () => {
		common.clickAddButton();
		expect(element(by.cssContainingText('.add-button-menu', 'Planning Essentials')).isPresent()).toBe(true);
		common.clickInsuranceMenuButton();
		browser.sleep(1000);
		expect(element(by.cssContainingText('.col-xs-8', 'Insurance')).isPresent()).toBe(true);
		common.termlifeMenuButtonV2.click();
		browser.sleep(1000);

		Logger.info('entering new insurance data');
		element(by.id('termLifeName')).sendKeys('Hi-Fidelity');
		element(by.cssContainingText('option', 'Voyant')).click();

		common.clickSaveButton();
		browser.sleep(5000);

		element(by.cssContainingText('.accordion-label', 'Insurance')).click();

		expect(browser.getTitle()).toBe('Dashboard');
		expect(element(by.buttonText('Ryssdal, Kai')).isPresent()).toBe(true);
		expect(element(by.cssContainingText('.name-text', 'Hi-Fidelity')).isPresent()).toBe(true);
		expect(element(by.cssContainingText('.no-data-description', 'No Cash Flow in Base Plan')).isPresent()).toBe(false);
		browser.takeScreenshot();
	});
});
