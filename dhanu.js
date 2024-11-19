 import {checkShift,getweather,discount,customer} from "./index.js"
 
 const hour =prompt("Enter your number")
 
 
 console.log(checkShift(hour))

 const temp = prompt("Enter your number")
 console.log(getweather(temp))

 const bill = prompt("Enter your number")
 console.log(discount(bill))

 const order = prompt("Enter your number")

 console.log(customer(order))