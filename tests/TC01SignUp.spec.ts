import {test ,expect} from "../Fixture/Fixture";
import { createSignUpData } from "../Data/SignUpData";

test(`sign up test case ` ,
     {tag :['@Smoke','@Regression'],
      annotation : [{
              type : "Category",
              description : "first test case"
      }   ]

},async({page,loginPage,SignupPage})=>{     
     let user  = createSignUpData();
     await loginPage.goToWebsite();
     await page.waitForLoadState();
     await loginPage.goToSingUpLoginPage();
     await SignupPage.singUpByUser(user);
});

