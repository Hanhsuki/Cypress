// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//Commands là một API cho phép định nghĩa các lệnh tùy chỉnh để sử dụng trong test case
//Cypress.commands.add để đăng ký lệnh tùy chỉnh của bạn sau đó gọi để sử dụng.
//Gọi lệnh command trên bằng cách cy.login(user,password)
//cy.visit('./login') lệnh này để truy cập vào trang login của ứng dụng
Cypress.commands.add('LoginToApplication', (userName, password) =>{
    cy.visit('./login')
})

