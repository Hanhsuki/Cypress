/// <reference types = "cypress" />
describe('Test with backend', () =>{
    beforeEach('Login application', () => {

    })
//Trong cypress có thể kiểm tra api trực tiếp khi đang thao tác UI
    it('Verify correct request and response', ()=>{
        cy.intercept('post', 'urlAPI').as('nameAPI')//as là để đặt tên cho request
        cy.wait('@nameAPI')//dùng wait để sự kiện sảy ra trong ứng dụng hoàn thành
    
        cy.get('@nameAPI').then(xhr =>{
            console.log(xhr)
            expect(xhr.response.statusCode).to.equal(200)
        })
    })
    //Ngoài ra bạn cũng có thể gọi request trực tiếp
    cy.request('method', 'urlAPI')
})