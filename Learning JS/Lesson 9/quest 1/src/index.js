// Імпортнути конструктор класу User із папки сервіс

// Імпортнути усі Regexp із папки константів та перейменувати Regexp someName у urlReg (при імпорті, без використання додаткових змінних)
// Що таке Regexp можна переглянути тут https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
// Якщо коротко, то це правило за допомогою якого можна валідувати/тестувати якесь значення
// Приклад використання

import User from "./services/user.js";
import { emailReg, phoneReg, someName as urlReg } from "./constants/regex.js";

const testUserList = [
  {
    name: "Max",
    email: "Max@gmail.com",
    phoneNumber: "0999",
    businessSite: "google.com",
  },
  {
    name: "John",
    email: "John@gmail.com",
    phoneNumber: "0999999999",
    businessSite: "http/google.com",
  },
  {
    name: "Alex",
    email: "Alex@gmail.com",
    phoneNumber: "0999999999",
    businessSite: "https://google.com",
  },
  {
    name: "Mike",
    email: "Mike.com",
    phoneNumber: "0999999999",
    businessSite: "https://google.com",
  },
  {
    name: "Ben",
    email: "Ben.com",
    phoneNumber: "qwejviep",
    businessSite: "https://google.com",
  },
];

const resultUserList = [];

for (const user of testUserList) {
  if (urlReg.test(user.businessSite)) {
    if (emailReg.test(user.email)) {
      if (phoneReg.test(user.phoneNumber)) {
        const newUser = new User(user);
        resultUserList.push(newUser);
      }
    }
  }
}

console.log(resultUserList);
