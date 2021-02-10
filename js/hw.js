//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
// method 1
for(i = 0; i < Object.keys(person3).length; i++){
    console.log(person3[Object.keys(person3)[i]])
}
// method 2
console.log(Object.values(person3))

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

function Person(name,age){
    this.name = name;
    this.age = age;

    this.printInfo = () => {
        let message = `${name} is ${age} years old.`
        console.log(message)
        return message
    }
    this.getOlder = () => {
        age += 1
        console.log(age)
        return age
    }
    this.addAge = (years) => {
        age += years
        console.log(age)
        return age
    }
}
let person1 = new Person("Major",3)
let person2 = new Person("Champ",12)

person1.printInfo()
person2.printInfo()

for(i=0; i < 3; i++){
    person1.getOlder()
}
person2.addAge(2)

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isGreater10 = (num) => {
    return new Promise( (resolve, reject) => {
        if(num > 10){
            resolve(true)
        } else {
            reject(false)
        }
    })
}
isGreater10(1)
.then( (result) => {
    console.log('Big Word')
})
.catch( (error) => {
    console.log('Small Number')
})

isGreater10(11)
.then( (result) => {
    console.log('Big Word')
})
.catch( (error) => {
    console.log('Small Number')
})
