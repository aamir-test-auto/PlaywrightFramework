import {Page,Locator} from "@playwright/test";
import { Faker } from "@faker-js/faker";
export class Login{
 
  readonly page              :Page     ;  
   readonly loginEmail        : Locator ;
   readonly password          : Locator ;
  readonly name              : Locator ;
  //readonly name              : Locator ;
  readonly signUpEmail       : Locator ;
  readonly loginButton       : Locator ;
  readonly signUpButton      : Locator ;
  readonly signLoginLink     : Locator ;
  readonly  Logout           : Locator ;
  readonly  errorMessage     : Locator ;




constructor(page:Page){
    this.page =page ;
    this.signLoginLink= page.locator("ul.nav.navbar-nav > li").nth(3);
    this.name =page.getByRole('textbox', { name: 'Name' });
    this.signUpEmail=page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address');
    this.signUpButton=page.getByRole('button', { name: 'Signup' });
    this.loginEmail = page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address');
    this.password = page.getByRole('textbox', { name: 'Password' });
    this.loginButton=page.getByRole('button', { name: 'Login' });
    this.Logout = page.locator('//a[@href="/logout"]');
    this.errorMessage= page.locator("//p[contains(text(),'Your email or password is incorrect!')]");
}

 async goToWebsite(){
    await this.page.goto("https://automationexercise.com/",{
    timeout: 60000,
    waitUntil: 'load'
});
 }

 async goToSingUpLoginPage(){
    await this.signLoginLink.click();
 }

 async signup(name:string ,email:string){
   await this.name.fill(name);
   await this.signUpEmail.fill(email);
   await this.signUpButton.click();
 }

 async loginByUser(email:string ,password:string):Promise<void>{
  await    this.loginEmail.fill(email);
  await   this.password.fill(password);
  await   this.loginButton.click();
 }

}