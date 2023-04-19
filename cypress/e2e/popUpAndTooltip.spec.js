it.only('tooltip', () => {
    cy.contains('').click() //click on element
    cy.comtains('').should() //Check nội dung tooltip
})

it.only('popup', () => {
    //C1
    cy.contains('').click() //click button view popup
    //on() dùng để gắn hành động vào phần tử
    //windown:confirm là event được cung cấp sẵn bở cypress
    cy.on('window:confirm', (confirm) => {
        confirm.to.equal('textExpected')
    })

    //C2
    const stub = cy.stub() //stub() là hàm để mock một phương thức, hàm hoặc thuộc tính nào đó.
    cy.on('window:confirm', stub) 
    cy.get('').find().click().then(() => {
        //stub.getCall(0) truy xuất thông tin về lần gọi đầu tiên
        //to.be.calledWith() được dùng để kiểm tra tham số được truyền vào giả lập
        expect(stub.getCall(0)).to.be.calledWith('textExpected')
    })

     //C3
     cy.contains('').click() //click button view popup
     //Trả về giá trị false có thể ngăn chặn không hiển thị popup
     cy.on('window:confirm', () => False)
    
})