it.only('datePicker', () => {
    let date = new Date()
    date.setDate(date.getDate() + 5)
    let futureDay = date.getDay()
    let futureMonth = date.toLocaleString('default', {month: 'short'})
    let dateAssert = futureMonth + ' ' + futureDay + ' ' + date.getFullYear()

    cy.contains().find('input').then(input => {
        cy.wrap(input).click() //open Datepicker
        crypto.get().invoke().then(dateAttribute => {
            if(dateAttribute.includes(futureMonth)){
                cy.get('').click() //nextPage
                cy.get().contains(futureDay).click() //Select date
            }else{
                cy.get().contains(futureDay).click() //Select date
            }
        })
    })

    //Cách 2
    cy.contains().find('input').then(input => {
        cy.wrap(input).click() //open Datepicker
        function selectDayFromCurrent(){
            crypto.get().invoke().then(dateAttribute => {
                if(dateAttribute.includes(futureMonth)){
                    cy.get('').click() //nextPage
                    selectDayFromCurrent()
                }else{
                    cy.get().contains(futureDay).click() //Select date
                }
            })
        }
    })
    cy.wrap(input).invoke('prop', 'value').should('contain', dateAssert) //check date sau khi đã chọn 
})
function selectDay(day){
    let date = new Date()
    date.setDate(date.getDate() + 5)
    let futureDay = date.getDay()
    let futureMonth = date.toLocaleString('default', {month: 'short'})
    let dateAssert = futureMonth + ' ' + futureDay + ' ' + date.getFullYear()
    crypto.get().invoke().then(dateAttribute => {
        if(dateAttribute.includes(futureMonth)){
            cy.get('').click() //nextPage
            cy.get().contains(futureDay).click() //Select date
        }else{
            cy.get().contains(futureDay).click() //Select date
        }
    })
    return dateAssert
}