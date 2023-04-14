//Hello World
console.log("Hello")
// run: node <fileName.js>

//Variable
var lastName = "Hanh"
let firstName = "Nguyen"

var date, dateOfBirth, sex
age = 20
sex = "Female"
console.log(age)
age = 10
console.log(age)

//Constants
const OCCUPATION = "Tester"

//Data Types
var middleName = "Anh"
var ageOfSister = 25
var isMarried = false
var yearInMarried = null
var numberOfCars = undefined

//Concatenation and interpolation
var price = 50
var itemName = "Cup"
var messageOfPrint2 = "The price for your" + itemName +  "is" + price + "dollars" //Concatenation
var messageOfPrint2 = `The price for your ${itemName} is ${price} dollars` //interpolation
console.log(messageOfPrint1)
console.log(messageOfPrint2)

//Objects
var customer = {
    firstName : "Nguyen",
    lastName : "Hanh"
}
console.log(customer.firstName)
console.log(customer['firstName'])

customer.firstName = "Hong" //Dot notation
customer['firstName'] = "Tran" //Bracket notation

console.log(`${customer.firstName} ${customer['firstName']}`)

//Array
var car = [toyota, honda]
console.log(car[0])

//Relational and Equality Operation
var x = 1
console.log(x == '1') //lose comparison
console.log(x === '1') //Strict comparison

//Conditional statement
if(condition){

}else{

}

if(condition){

}else if (condition){
    
}else{

}

//For oop
for(statement1; statement2; statement3){

}

var cars = ["Tesla", "Toyota"]
for (let i = 0; i < car.length; i++){
    console.log(car[i])
}
//For of loop
var cars = ["Tesla", "Toyota", "Honda"]
for (let car in cars){
    console.log(car)
    if(car == "Toyota"){
        break
    }
}
//ES6 syntax for each loop
cars.forEach(car => {
    console.log(car)
})
//Declaration function
function funcExample(){
    console.log()
}
//Anonymus function
var anonymusFunc = function(){
    console.log()
}
//ES6 function syntax or arrow function
var arrowFunc = () =>{
    console.log()
}
//Function with argument
function funcExample(name){
    console.log(name)
}
//Function with return
function funcReturn(number){
    var result = number*2
    return result
}
//Import function
import {funcExample} from '/../Lessons/lesson1.js'