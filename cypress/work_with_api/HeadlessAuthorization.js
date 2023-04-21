//Bạn có thể save token vào local storage để dùng 
cy.visit('./', {
    onBeforeLoad(win) {
        win.localStorage.setItem('jtwToken', token)
    }
})

//call token
cy.get('@token').then(token => {
    
})
