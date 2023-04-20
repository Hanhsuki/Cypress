it('api call example', () => {
    const userCredentials = {
        "user" : {
            "gmail": "nguyenhanh@gmail.com",
            "passWord": "ahihidongoc"
        }
    }

    cy.request("POST", "url", userCredentials).its('body').then(body => {
        const token = body.pathToToken

        cy.request({
            url: "",
            headers: "",
            method: "",
            body: ""
        }).then(response => {
            expecte(response.status).to.equal(200)
        })
    })
})