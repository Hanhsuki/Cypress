//Note: Can using feature search is find source html. and edit source code.
//Note: Need get or contains before find. Because find() is find child element from the parent element
it.only('test', () => { //Run only this test using keyword <it.only>
    cy.visit('url application') 
    cy.visit('/') // open website to your application. default: locallhost:<portRun>
    cy.contains('text need verify of locator') //find element 
    cy.contains('[attribute = "value"','text need verify of locator') // with multiple condition
    cy.get('').parents('tagNameElement').get('tagName') //Parent multip level using parents
    cy.get('').find() //find() using find element in dom. according get()
    cy.get('').should('contains', 'Text expected') //should() using is verify element contain text.
    cy.get('').click() //click on element




})