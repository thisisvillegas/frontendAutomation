// const EC = protractor.ExpectedConditions;
const  Common  = require('./pageobj/common')
const { Logger } = require('./config/Logger')


describe('Protractor Demo App', () => {

    beforeAll(async () => {
        common = new Common();
      browser.waitForAngularEnabled(false)
      Logger.info('fetching site');
      browser.get('https://ca-test.planwithvoyant.com/advisergo');
      await browser.sleep(2000)

      Logger.info('entering Credentials');

      common.usernameField.sendKeys('voyant-exercise');
      common.passwordField.sendKeys('password100')
      common.logInButton.click()  

	});
    
    it('Adding a new client', async () => {

      common.clickAddButton()   

      await browser.sleep(1000)

      Logger.info('entering New Client Data');
      element(by.id('newInputFirst')).sendKeys('Kai');
      element(by.id('newInputLast')).sendKeys('Ryssdal');
      element(by.id('newPersonInputBirthday')).sendKeys('1967');

      common.clickSaveButton()

      //this takes us back to the main menu
    //   Logger.info('saving new Client');
    //   element(by.buttonText('Save')).click();
    //   await browser.sleep(2000)
      
     });

    it('Should add Pre-retirement Amount', async () => {

      common.clickAddButton() 
      await browser.sleep(2000)
      element(by.buttonText('Goals')).click();
      await browser.sleep(1000)
      //gross
      element(by.xpath('/html/body/div/div/div[2]/div[5]/div/div/div[2]/div/div[2]/div/div[2]/div/ul/li[1]/div')).click();
      await browser.sleep(3000)

      Logger.info('entering pre-retirement amount');
      element(by.id('basicExpenseInputAmount')).sendKeys('1000');

      //this takes us back to the main menu
      common.clickSaveButton()
      await browser.sleep(2000)

    });

    it('Should add new employment data', async () => {
      common.clickAddButton() 
      await browser.sleep(2000)
      element(by.buttonText('Income')).click();
      await browser.sleep(1000)
      //gross x2
      element(by.xpath('/html/body/div/div/div[2]/div[5]/div/div/div[2]/div/div[2]/div/div[2]/div/div/ul/li[1]')).click();
      await browser.sleep(3000)

      Logger.info('entering new employment data');
      element(by.id('employmentInputName')).sendKeys('Voyant');
      element(by.id('employmentInputSalary')).sendKeys('110000');

      //this takes us back to the main menu
      common.clickSaveButton()
      await browser.sleep(2000)

    //   element(by.linkText('Income')).click()
    //   expect(element(by.linkText('Voyant')).toBeDefined())
    //   expect(element(by.xpath('/html/body/div/div/div[2]/div[4]/div[2]/div[1]/div/div/div/div[2]/div/div[3]/div/div/div/div/div/div/table/tbody/tr/td[3]/span/span')).toEqual('$110,000'))
   

    });

    it('Should add new insurance data', async () => {
      common.clickAddButton()
      await browser.sleep(2000)
      element(by.buttonText('Insurance')).click();
      await browser.sleep(1000)
      //gross x3
      element(by.xpath('/html/body/div/div/div[2]/div[5]/div/div/div[2]/div/div[2]/div/div[2]/div/div/ul/li[1]')).click();
      await browser.sleep(3000)

      Logger.info('entering new insurance data');
      element(by.id('termLifeName')).sendKeys('Hi-Fidelity');
      element(by.cssContainingText('option', 'Voyant')).click();
      
      //this takes us back to the main menu
      common.clickSaveButton()
      await browser.sleep(2000)


    });
  });