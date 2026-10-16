import {test as baseTest} from "@playwright/test"
import {Login} from "../POM/Login"
import {PLP} from "../POM/PLP"
import {Signup} from "../POM/Signup"

type fixture = {
     loginPage : Login ;
     SignupPage: Signup ;
     plpPage   : PLP ; 
}



export const test =baseTest.extend<fixture>(
    {
           loginPage: async ({ page }, use) => {
           const loginPage = new Login(page);
           await use(loginPage);
           }  ,

           SignupPage : async({page},use)=>{
           const SignupPage = new  Signup(page);
           await use(SignupPage);
          },
          
            plpPage : async({page},use)=>{
            const plpPage = new PLP();
            use(plpPage);
          }
    }
)

export { expect } from "@playwright/test";