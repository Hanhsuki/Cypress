it.only('List and drop down', () => {
    //C1
    cy.get('').click() //click on dropdown
    cy.get('').contains('textSelect').click() //get list option and click expected text 
    cy.get('').should('have.css', 'background-color', 'rgb()')
    //c2
    cy.get('').then(dropdown => {
        cy.wrap(dropdown).click()

        const color = {
            "Light": "rgb()",
            "Dark": "rgb()",
            "Cosmic": "rgb()",
            "Corporate": "rgb()"
        }
        cy.get('').each(listItem => {
            const item = listItem.text().trim()
            cy.wrap(listItem).click()
            cy.wrap(dropdown).should('contain', item)
            cy.get('').should('have.css', 'background-color', color[item])
        })
    })
})