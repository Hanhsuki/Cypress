/// <reference types = "cypress" />
describe('Json Objects', () =>{
    it('Json Objects', () =>{
        cy.OpenHomePage()

        const simpleObject = { "key": "value", "key2": "value2"}
        const simpleArrayOfValue = ["one", "two", "three"]
        const arrayOfObjects = [{"key": "value"}, {"key2": "value2"}]
        const typesOfData = {"String": "This is a string", "Number": 10}
        const mix = {
            "graduate": 7,
            "Students": [
                {
                    "firstName": "Nguyen",
                    "lastName": "Hanh"
                },
                {
                    "scoreMath": 8,
                    "scoreGeography": 5
                }
                
            ]
        }
        console.log(simpleObject.key)
        console.log(simpleObject["key"])
        console.log(simpleArrayOfValue[1]) //index number
        console.log(arrayOfObjects[index].key2)
        console.log(mix,Students[index].firstName)
    })
})