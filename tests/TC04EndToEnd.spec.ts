import {test,expect} from '../Fixture/Fixture';

test("End to end test case",async({page ,cartPage,plpPage})=>{
      
    await page.goto('/');
    await plpPage.goToPlpPage();
    await plpPage.addToCartFistProduct();
    await cartPage.goToCart();
    await page.reload();
   // const productNameF = plpPage.listOfAllProductDiv.first().locator("p").first();
  //console.log(productNameF);
    //await expect(productNameF)
    //.toHaveText("Blue Top");
})


