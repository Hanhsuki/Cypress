function slectGroupMenuItem(groupName){

}

export class NavigatePage{
    formLayoutPage(){
        slectGroupMenuItem()
        cy.contains('Forms').click()
    }

    datePickerPage(){

    }
}

const navigateTo = new NavigatePage()