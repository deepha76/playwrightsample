import { Locator, Page, expect } from "@playwright/test";

export default class InputBoxPage{
  await: any;

    constructor(public page:Page){

    }

    async typeYourName(firstName:String){

        console.log(firstName)


                  await this.page.locator("//*[@id='j_idt88:name']").click();



             const enterInput = this.page.locator("//*[@id='j_idt88:name']");

           await enterInput.clear();


         await this.page.locator("//*[@id='j_idt88:name']").type(`${firstName}`);

    }
         async appendCountryName(countryName:String){


            await this.page.locator("//*[@id='j_idt88:j_idt91']").click();
            await this.page.locator("//*[@id='j_idt88:j_idt91']").type(`${countryName}`);


         }

         Verify_if_text_box_is_disabled(){

            
           
         }

         async verifyClearText_box(){
            const tt = await this.page.locator("//*[@id='j_idt88:j_idt95']");

            await tt.click();

            await tt.clear();

            const th = this.page.locator("//*[@id='j_idt88:j_idt95']");
            await expect(th).toBeEmpty();

            console.log(th);

            
         }
         async verifyTxtValue(){
            const txt = await this.page.locator("//*[@id='j_idt88:j_idt97']").inputValue();
            console.log("TEXT value123"+txt);
            await this.page.keyboard.press('Tab');
            return txt;
         }

        async verifyErrorMessage(){
            const txt = await this.page.locator("//*[@id='j_idt106:thisform:age']");
            //console.log("TEXT value123"+txt);
            await this.page.keyboard.press('Enter');
            const errorMsg = await this.page.locator("//*[@id='j_idt106:thisform:j_idt110']");
            console.log("Error message: " + await errorMsg.textContent());
            await expect(errorMsg).toBeVisible();
            return errorMsg;
         }

    async arrayTest(){
        const arr = [1, 2, 3, 4, 5];
        const expectedArr = [1, 2, 3, 4, 6];

        if(arr.length !== expectedArr.length) {
            console.log("Array test failed: Length mismatch");
            return;
        } else {
            for(let i=0; i<arr.length; i++){
                if(arr[i] !== expectedArr[i]){
                    console.log(`Array test failed: Mismatch at index ${i}. Expected ${expectedArr[i]}, but got ${arr[i]}`);
                    return; 
                }  
                console.log("Array test passed successfully");
            } 
        }
    }

    async arrTest123(){
        let a:number[] = [1,2,3,4,5];
        console.log(a.length);
    }
}