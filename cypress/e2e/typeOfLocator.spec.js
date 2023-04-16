/// <reference types = "cypress" />

describe('Our first suite', () => {
    it('some test name', () => { 
        //open application in the Cypress   
        cy.visit('/')
        cy.contains('textElement').click()
        
        //by Tag Name
        cy.get('tagName')
        //by ID
        cy.get('#iD')
        //by class Name
        cy.get('.className') //inside of the class has three different class names. let's take the very first class name
        //by attribute Name
        cy.get('[attributeName]')
        //by attribute Name and value
        cy.get('[attributeName="value"]')
        //by class value
        cy.get('[class="......."]')
        //by tag Name, Attribute and value
        cy.get('tagName[attribute="value"]')
        //by difference attribute
        cy.get('[attributeName="value"][attributeName="value"]')
        // by tag Name, Attribute and value, id and class name
        cy.get('tagName[attribute="value"]#iD.className')

        //The most recommended way by cypress
        cy.get()
    })

})