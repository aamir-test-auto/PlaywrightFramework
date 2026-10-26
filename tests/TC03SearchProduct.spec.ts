import {test,expect} from '../Fixture/Fixture'
import * as fs from 'node:fs';
const filePath = "Data/ProductName.json";
const content = fs.readFileSync(filePath, 'utf8');
const prductlist = JSON.parse(content);

for(const product of prductlist){
test(`search product ${product}` ,async({plpPage,loginPage})=>{    
    await loginPage.goToWebsite();
    await plpPage.goToPlpPage();
    await plpPage.search_Product(product);  
    await expect(plpPage.searchProductDiv.first()).toContainText(product);
})
}