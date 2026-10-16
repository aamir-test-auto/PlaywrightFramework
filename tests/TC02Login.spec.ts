import {test} from "../Fixture/Fixture" ;


test("Login with correct credentials",async({page,loginPage})=>{
  await loginPage.goToWebsite();
   await loginPage.goToSingUpLoginPage();
   await loginPage.loginByUser("aamir12345@yopmail.com","Aa78692N#");
})