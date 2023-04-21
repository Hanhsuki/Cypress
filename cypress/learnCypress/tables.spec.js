it.only('tables', () => {
    //C1
    cy.get('allTable').contains('rowByitemInRow').then(tableRow => {
        cy.wrap(tableRow).find('itemInRow').click()
        //Type để input text. mặc định xóa value cũ. 
        //Nếu muốn viết thêm vào text cũ dùng cy.invoke('textInput')
        cy.wrap(tableRow).find('itemInRow').clear().type('textInput') 
        cy.wrap(tableRow).find('itemInRow').should()
    })

    //C2
    cy.get('allTable').contains('rowByitemInRow').then(tableColumn => {
        cy.wrap(tableColumn).find('itemInRow').eq().click()
        cy.wrap(tableColumn).find('itemInRow').eq().clear().type('textInput') 
        cy.wrap(tableColumn).find('itemInRow').eq().should()
    })

    //C3
    cy.get('allTable').type().each(tableRow => {
        cy.wrap(tableRow).find('itemInRow').eq().click()
        cy.wrap(tableColumn).find('itemInRow').eq().should()
    })

})