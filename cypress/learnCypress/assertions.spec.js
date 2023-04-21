it.only('assertions', () => {
    //C1
    cy.get('')
        .should('contains', 'textExpected')
        .should('have.Attribute', 'valueAttributeExpected')
        .and('have.text', 'textExpected')
    
    //C2
    cy.get('').then(label => {
        expect(label.text()).to.equal('textExpected')
        expect(label).to.have.class('textExpected')
    })
})