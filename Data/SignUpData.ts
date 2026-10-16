import { faker } from '@faker-js/faker';
import {user} from "../Model/new.user"

export  const createSignUpData =():user =>( {

     name    : faker.person.fullName() ,
     email   :  `${faker.person.lastName()}${faker.number.int()}@yopmail.com`,
     password:  `${faker.person.lastName()}${faker.number.int()}`,
    firstName:  faker.person.firstName(),
    lastName : faker.person.lastName() ,
    company  :  `${faker.person.firstName} Enterprise`,
    address  :faker.location.street() ,
    address2 : faker.location.streetAddress() ,
    country  : faker.location.country() ,
    state    : faker.location.state() ,
    city     : faker.location.city() ,
    zipcode  : faker.location.zipCode() ,
    mobileNo : faker.phone.number()
}
)          

