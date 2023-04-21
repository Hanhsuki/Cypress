//call evn from cypress.config.js
//Cũng có thể truyền thẳng value của các biến môi trường trong lệnh run --env attribute=value
Cypress.env("userName")
//Có thể tạo 1 file riêng cypress.evn.json để config value biến môi trường