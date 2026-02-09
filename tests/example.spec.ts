import {chromium,Page, test, expect } from '@playwright/test';

import InputBoxPage from './pages/inputPage';
test.beforeAll(async () => {


});


  test('Sample Test Case', async () => {

  const browser = await chromium.launch();
const context = await browser.newContext();
const page1 = await context.newPage();
    const register = new InputBoxPage(page1);
await page1.goto('https://leafground.com/input.xhtml');
//await expect(page1).toHaveTitle('Input Components');
await register.typeYourName('Playwright User');
await register.appendCountryName('Pakistan');
//const isDisabled =  await register.Verify_if_text_box_is_disabled();

//console.log('Is the text box disabled: ' + isDisabled);

//await expect(isDisabled).toBeDisabled();

await register.verifyClearText_box();

const txt = await register.verifyTxtValue();
console.log("TEXT value"+txt);
await register.verifyErrorMessage();

await register.arrayTest();

await register.arrTest123();






  });


