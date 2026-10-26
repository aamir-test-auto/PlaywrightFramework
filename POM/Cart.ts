import {Page,Locator} from '@playwright/test';

export class Cart{

    readonly page     : Page ;
    readonly cartIcon :Locator ;

       constructor(page : Page){
        this.page = page ;
        this.cartIcon = page.locator('//a[@href="/view_cart"]');
       }

      async goToCart(){
        await this.cartIcon.first().click();
      }

      


}

export {expect} from "@playwright/test";