it('invoke command', () =>{
    //1
    cy.get('').should('contain', 'textExpect')

    //2
    cy.get('').then(lable =>{
        expect(lable.text()).to.equal('textExpect')
    })
    //3
    cy.get('').invoke('text').then( text =>{
        expect(text).to.equal('textExpected')
    })

    cy.contains('tagName', 'textElement')
        .find()
        .click('CheckboxElement')
        .find('ElementCheckboxAfterClick')
        .invoke('attr', 'AttributeNameElement') //example AttributeNameElement = 'class'
        // .should('contain', 'valueAttributeElement') //C1
        .then(classValue => {
            expect(classValue).to.contain(valueAttributeElement)
        })
})
it('assert property', () => {
    
})