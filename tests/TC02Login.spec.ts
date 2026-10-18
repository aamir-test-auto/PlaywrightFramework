import {test,expect} from "../Fixture/Fixture" ;
import * as fs from 'node:fs';

const filePath = "Data/LoginData.json";
const content = fs.readFileSync(filePath, 'utf8');
const datum = JSON.parse(content);


for(const data of datum){
  test(`Login with ${data.username} , ${data.password} and ${data.status}  credentials`,async({page,loginPage})=>{
  await loginPage.goToWebsite();
  await loginPage.goToSingUpLoginPage();
  await loginPage.loginByUser(data.username,data.password);

   if(data.status==='valid'){
     await expect(loginPage.Logout).toBeVisible();
   }else{   
     await  expect(loginPage.errorMessage).toBeVisible();
   }
})
}