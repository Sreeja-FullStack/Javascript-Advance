// Challenge: 
// 1. Create three variables - bar, cafe, restaurant - and set their values to a bar, a cafe and a restaurant in your city
// 2. Create an object - favouritePlaces - and populate it with your variables from task 1
// 3. If you're not already using the object property shorthand, refactor your code to do so
// 4. Create a method on the object - greeting() -  that logs out a message to the console
// 5. Invoke the greeting() method and also log out your favourite restaurant to the console

let bar = "cloud";
let cafe = "cloudCafe";
let restaurant = "cloudRest";

const favPlace = { bar, cafe, restaurant,
    greeting(){ 
        console.log("Hi! there")
    }
}

//obj.method
favPlace.greeting()
console.log(favPlace)
