describe('shadow dom', () => {
    it('access shadow dom', () =>{
        cy.visit('')
        cy.get('#app').shadow().find('#container')
    })
})

//shadow support from cypress 5.2