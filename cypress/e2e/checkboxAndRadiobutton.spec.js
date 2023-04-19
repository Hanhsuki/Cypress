it.only('radioButton', () => {
    cy.contains().find().then(radioButtons, () =>{
        //First để chọn phần tử đầu tiên, check kiểm tra phần tử checkbox, chọn nếu chưa được chọn và không làm gì nếu đã được chọn.
        //Nếu dùng check({fore: true}). Checked hết kể cả khi checkbox đó đã được chọn.
        cy.wrap(radioButtons)
            .first()
            .check()
            .should('be.checked')

        //eq(index) được dùng để chọn phần tử trong tập hợp, và index bắt đầu từ 0
        cy.wrap(radioButtons)
            .eq(1)
            .check({fore: true})

        cy.wrap(radioButtons)
            .first()
            .check('not.be.checked') //verify checkbox not checked

        cy.wrap(radioButtons)
        .first()
        .check('be.disabled') //verify checkbox disabled
    })
})

it.only('checkbox', () => {
    cy.get('').check({fore: true})
    cy.get('').eq(0).check({fore: true})
})
