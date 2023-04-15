export function printAge(age){
    console.log(age)
}

export class CustomerDetails{
    printFirstName(firstName){
        console.log(firstName)
    }
}

class CustomerInformation{
    /**
     * This method will sprint Name
     * @param {String} name 
     */
    printName(name){
        console.log(name)
    }
}

export const customerInformation = new CustomerInformation()