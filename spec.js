// const EC = protractor.ExpectedConditions;
const Common = require('./pageobj/common');
const { Logger } = require('./config/Logger');

describe('Protractor Demo App\n', () => {
	beforeAll(async () => {
		common = new Common();
		browser.waitForAngularEnabled(false);
		Logger.info('fetching site');
		browser.get('https://ca-test.planwithvoyant.com/advisergo');
		await browser.sleep(2000);

		Logger.info('entering Credentials');
		common.usernameField.sendKeys('voyant-exercise');
		common.passwordField.sendKeys('password100');
		common.logInButton.click();
	});

	it('Adding a new client', async () => {
		common.clickAddButton();
		await browser.sleep(1000);

		Logger.info('entering New Client Data');
		element(by.id('newInputFirst')).sendKeys('Kai');
		element(by.id('newInputLast')).sendKeys('Ryssdal');
		element(by.id('newPersonInputBirthday')).sendKeys('1967');

		common.clickSaveButton();
		await browser.sleep(3000);
		// expect(browser.getURL())
	});

	it('Should add Pre-retirement Amount', async () => {
		await common.clickAddButton();
		await common.clickGoalsMenuButton();
		await browser.sleep(1000);
		await common.preretirementMenuButton.click();
		await browser.sleep(1000);

		Logger.info('entering pre-retirement amount');
		element(by.id('basicExpenseInputAmount')).sendKeys('1000');

		await common.clickSaveButton();
	});

	it('Should add new employment data', async () => {
		await common.clickAddButton();
		await common.clickIncomeMenuButton();
		await browser.sleep(1000);
		await common.employmentMenuButton.click();
		await browser.sleep(1000);

		Logger.info('entering new employment data');
		element(by.id('employmentInputName')).sendKeys('Voyant');
		element(by.id('employmentInputSalary')).sendKeys('110000');

		await common.clickSaveButton();

		//   element(by.linkText('Income')).click()
		//   expect(element(by.linkText('Voyant')).toBeDefined())
		//   expect(element(by.xpath('/html/body/div/div/div[2]/div[4]/div[2]/div[1]/div/div/div/div[2]/div/div[3]/div/div/div/div/div/div/table/tbody/tr/td[3]/span/span')).toEqual('$110,000'))
	});

	it('Should add new insurance data', async () => {
		await common.clickAddButton();
		await common.clickInsuranceMenuButton();
		await browser.sleep(1000);
		await common.termlifeMenuButton.click();
		await browser.sleep(1000);

		Logger.info('entering new insurance data');
		element(by.id('termLifeName')).sendKeys('Hi-Fidelity');
		element(by.cssContainingText('option', 'Voyant')).click();

		await common.clickSaveButton();
	});
});
