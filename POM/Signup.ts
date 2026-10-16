import {Page,Locator} from "@playwright/test";
import {Login} from "./Login";

export class Signup{
        readonly page            : Page ;
        readonly mrRadio         : Locator ;
        readonly mrsRadio        : Locator ;
        readonly password        : Locator ;
        readonly day             : Locator ;
        readonly month           : Locator ;
        readonly year            : Locator ;
        readonly signUpCheckBox  : Locator ;
        readonly offerCheckBox   : Locator ;
        readonly firstName       : Locator ;
        readonly lastName        : Locator ;
        readonly company         : Locator ;
        readonly address         : Locator ;
        readonly address2        : Locator ;
        readonly country         : Locator ;
        readonly state           : Locator ;
        readonly city            : Locator ;
        readonly zipCode         : Locator ;
        readonly mobileNo        : Locator ;
        readonly createAccButton : Locator ;

        constructor(page:Page){
               this.page =page ;
               this.mrRadio=page.getByRole('radio', { name: 'Mr.' });
               this.mrsRadio=page.getByRole('radio', { name: 'Mrs.' });
               this.password = page.getByRole('textbox', { name: 'Password *' });
               this.day   = page.locator('#days');
               this.month = page.locator('#months');
               this.year  = page.locator('#years');
               this.signUpCheckBox = page.getByRole('checkbox', { name: 'Sign up for our newsletter!' });
               this.offerCheckBox =page.getByRole('checkbox', { name: 'Receive special offers from' });
               this.firstName =page.getByRole('textbox', { name: 'First name *' });
               this.lastName  =page.getByRole('textbox', { name: 'Last name *' });
               this.company   =page.getByRole('textbox', { name: 'Company', exact: true });
               this.address   = page.getByRole('textbox', { name: 'Address * (Street address, P.' });
               this.address2  =page.getByRole('textbox', { name: 'Address 2' });
               this.country   =page.locator("#country");
               this.state    =page.getByRole('textbox', { name: 'State *' });
               this.city    =page.locator("#city");
               this.zipCode = page.locator("#zipcode");
               this.mobileNo = page.locator("#mobile_number");
               this.createAccButton =page.getByRole('button', { name: 'Create Account' });
        }


       async singUpByUser(SignUpData : any):Promise<void>{
         const loginPage = new Login(this.page);
         await loginPage.goToSingUpLoginPage();
         await loginPage.signup(SignUpData.name,SignUpData.email);
         //await this.page.waitForLoadState();
         await this.mrRadio.click();
         await this.password.fill(SignUpData.password);
         await this.day.selectOption("20");
         await this.month.selectOption("April");
         await this.year.selectOption("2012");
         await this.signUpCheckBox.click();
         await this.firstName.fill(SignUpData.firstName);
         await this.lastName.fill(SignUpData.lastName);
         await this.company.fill(SignUpData.company);
         await this.address.fill(SignUpData.address);
         //await this.address2.fill(SignUpData.address2);
         await this.country.selectOption("India");
         await this.state.fill("Uttar Pradesh");
         await this.city.fill("Lucknow");
         await this.zipCode.fill("202662");
         await this.mobileNo.fill("7286286282");
         await this.createAccButton.click();
       }


}
