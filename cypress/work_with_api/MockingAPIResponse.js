/// <reference types = "cypress" />
//fixture sẽ đổi các value trong fixture thành value trong api gốc mà bạn call
//* trong url claf ký tự đại diện, có nghĩa là tất cả các ký tự và chuôi trong đường dẫn đó.
//Nó có ý nghĩa là lấy all, nên hạn chế dùng vì nó làm giảm mức độ an toàn của api
describe('Mocking api response', () =>{
    cy.intercept('method', 'urlAPI', {fixture: 'tags.json'})
})

cy.fixture('tags').then(file => {
    const tagLink = file.tags[index] //index trong file tags.json
})

//reply để giả lập phản hồi từ máy chủ về
describe('Mocking api response', () =>{
    cy.intercept('method', 'urlAPI', (req) => {
        req.reply({statusCode: 200,
            body: []})
    })
})