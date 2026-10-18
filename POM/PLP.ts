import {Page,Locator} from "@playwright/test"

export class PLP{
  readonly page : Page ;
  readonly search : Locator ;
  readonly submit_search : Locator ;  
  readonly plpPageLink : Locator ;       
  readonly searchProductDiv : Locator ;       

   constructor(page:Page){
       this.page = page ;
       this.search = page.locator("#search_product");
       this. submit_search = page.locator("#submit_search");
       this.plpPageLink = page.locator('//a[@href="/products"]');
       this.searchProductDiv=page.locator(".single-products");
   }
    

   async goToPlpPage(){
       await  this.plpPageLink.click();

   }


   async search_Product(productName:string){
      await this.search.fill(productName);  
      await this.submit_search.click();  
   }



   


}


export {expect} from "@playwright/test";