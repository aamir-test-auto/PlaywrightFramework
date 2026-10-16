import {test ,expect} from "../Fixture/Fixture";
import { createSignUpData } from "../Data/SignUpData";



test(`sign up test case ` ,async({page,loginPage,SignupPage})=>{     
     let user  = createSignUpData();
     await loginPage.goToWebsite();
     await page.waitForLoadState();
     await loginPage.goToSingUpLoginPage();
     await SignupPage.singUpByUser(user);
     
});

