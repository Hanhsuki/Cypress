//Note: file.spec.js: là file chứa các test case. Nó chứa 1 loạt các lệnh cypress để tự động hóa hành động kiểm thử/
//file.js: chứa các hàm, biến và các đối tượng dwuocj sử dụng trong các kiểm thửu đẻ giúp tính năng được tái sửa dụng

it.only('then and wrap method', () => { 
    cy.contains('tagName1', 'Text Expected').find('Element1').should('contain', 'text1')
    cy.contains('tagName1', 'Text Expected').find('Element2').should('contain', 'text2')
    cy.contains('tagName2', 'Text Expected').find('Element3').should('contain', 'text3')
    cy.contains('tagName2', 'Text Expected').find('Element4').should('contain', 'text4')

    //Selenium style
    const firtForm = cy.contains('tagName1', 'Text Expected')
    const secondForm = cy.contains('tagName2', 'Text Expected')
    firtForm.find().should('contain', 'text1')
    firtForm.find().should('contain', 'text2')
    secondForm.find().should('contain', 'text3')
    secondForm.find().should('contain', 'text4')

    //Cypress style
    cy.contains('tagName1', 'Text Expected').then(firstForm => {
        const textFirst = firtForm.find('Element1').text()
        const textSecond = firtForm.find('Element2').text()

        expect(textFirst).to.equal('TextExpected1')
        expect(textSecond).to.equal('TextExpected2')

        //Chý ý là bối cảnh nếu cùng ở trong 1 page thì cần viết lồng, nếu để song song bên ngoài cypress sẽ không hoạt động.
        cy.contains('tagName2', 'Text Expected').then(secondForm => {  
            const textFirstSecondForm = firtForm.find('Element1').text()
            expect(textFirstSecondForm).to.equal('TextExpected3')
            //dùng để call đến 1 đối tượng.
            cy.wrap(secondForm).find().should()
        })
        
    })

})