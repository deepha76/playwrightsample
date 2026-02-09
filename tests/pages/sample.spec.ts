
import { test } from "@playwright/test";
import { assert } from "console";

import { test,expect,chromium } from '@playwright/test';
import { describe } from 'node:test';

describe('has title', async () => {

    test.only('Open Url',async({ page}) =>{     
   
    console.log('begin test')

    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const newPage = await context.newPage();   
    await newPage.goto('https://leafground.com/radio.xhtml;jsessionid=node014nuxoxwlbuhgho5ncotw5mfm12307072.node0');

    //await page.locator('#NAME').click();
    await newPage.locator('//*[@class="jui-radiobutton-icon ui-icon ui-c ui-icon-bullet"]').check();
// await newPage.locator('//*[@name="j_idt88:name"]').fill('Hello World');
//await newPage.locator('#popup-trigger-delete-login-popup').click();
 //await newPage.locator('//*[@name="j_idt88:name"]').clear();
 

  await newPage.pause()


    //getByText('NAME').click();
     
     //click("text=Get Started For Free");

     

     //await expect(newPage).toHaveTitle(/Swag Labs/);
     

    })  

    test('secound test case',async({ page}) =>{     
   
      console.log('begin test secound test case')   


      //div[@class='innerwrapper xs-bg-menu']
    })

 
});


test.only("Validate the collection1", async ({ page }) => {

    await page.goto("https://www.flipkart.com/");

    await page.waitForLoadState('networkidle');

    await page.locator("input[name='q']").fill("laptop");

        await page.waitForLoadState('networkidle');
    await page.keyboard.press('Enter');

    await page.waitForTimeout(5000);
    const allBrands = await page.locator(".RG5Slk").allTextContents();


    const cnt = allBrands.length;

    assert(24, cnt, "Total brands count mismatch");

    console.log("Total Brands: " + cnt);

    const firstBrand = allBrands[0];

    const tt = firstBrand.split(" ");

    const r = tt.map((item: string) => item.replaceAll(/[0-9]/g, " "));




     


 console.log(k);


    




  
  

    //console.log(allBrands[0]);








    
});


