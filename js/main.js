// Continue from yesterday with control flow 
// The switch case statement

let day = new Date().getDay();

let literal_day = new Date().toString();

console.log(day)
console.log(literal_day)

// switch case statement syntax
switch('Mon'){
    case 0:
        console.log('Go to church');
        break;
    case 'Mon':
        console.log("Write code...it's Monday!!")
        break;
    case 'Tues':
        console.log("Test Code...it's Tuesday!!")
        break;
    case 3:
        console.log("Testing more code on Wed")
        break;
    case 4: 
        console.log("Write a feature for project")
        break;
    case 5:
        console.log("Testing feature on Friday")
        break;
    case 6:
        console.log("Rest on Saturday")
        break;
    default:
        console.log("No case exists to handle that.")
        break;
}

// Dictionaries called Objects in JS
// -- Simple JavaScript Object (also known as object literal) --

let person = {
    name: 'John',
    age: 28,
    fav_color: 'Red'
}

// accessing data in our object
console.log(person['name']) // bracket notation
console.log(person.name) // dot notation

// complex javascript object
let person2 = {
    name: "Max",
    age: 31,
    prog_languages: ['JavaScript', 'Python', 'C++', 'Java'],
    fav_color: 'Blue',
    teams: [
        {
            baseball: 'Chicago White Sox',
            football: 'Chicago Bears',
            hockey: 'Chicago Blachawks',
            basketball: ['Chicago Bulls', "Chicago Sky"],
            soccer: ['Chicago Fire', 'Naperville Yellowjacks']
        },
        {
            baseball: 'Toronto Bluejays',
            football: 'LA Rams',
            basketball: 'Milwaukee Bucks',
            soccer: ['Manchester United', 'Liverpool']
        }
    ]
}

console.log(person2.teams[1].soccer[1]);

// -- Javascript object prototype methods -- object literal
console.log(Object.keys(person2))
console.log(Object.values(person2))

// Bad/Sad Path of lopping through objects in JavaScript
for(let i = 0; i < person2.length; i++){
    console.log(person2[i])
}

// Happy path of looping through 
for(let i = 0; i < Object.keys(person2).length; i++){
    console.log(Object.keys(person2)[i])
}

// List Values from person2 Object that are arrays
for(let i = 0; i < Object.keys(person2).length; i++){
    if(Array.isArray(Object.values(person2)[i])){
        console.log(Object.values(person2)[i])
    }
}

// Create our own object prototypes -- with ES5 Method Syntax
function Car(make,model,year){
    this.make = make;
    this.model = model;
    this.year = year;

    // A method inside of a JS Prototype
    this.printInfo = function(wheels = 0, color){
        console.log(`This is a ${this.year}, ${this.make}, ${this.model}
        and has ${wheels} and the color is ${color}`);
        return `This is a ${this.year}, ${this.make}, ${this.model}
        and has ${wheels} and the color is ${color}`
    }
}

// creating an instance of a prototype
let my_car = new Car('Honda', 'CR-V', 2019)

// call our prototype method
console.log(my_car.printInfo(4, 'Gun Metal'))

// -- JavaScript Classes -- //

class Human{
    constructor(name, age, gender){
        this.age = age;
        this.name = name;
        this.gender = gender;
    }
    printInfo() {
        return `Name: ${this.name} \n Age: ${this.age} \n Gender: ${this.gender}`
    }
}
let wilma = new Human('Wilma',25,"female")
console.log(wilma.printInfo())

// JS inheritance using classes
class Baby extends Human{
    constructor(name, age, gender, walking){
        super(name, age, gender)
        this.walking = walking
    }

    isBabywalking() {
        if(this.walking == true){
            return 'Baby is walking!'
        } else {
            return 'Baby ain\'t walking yet'
        }
    }
}

// create an instantiated value of Baby
let johnnie = new Baby('Johnnie', 1, 'Male', true);
console.log(johnnie.printInfo())
console.log(johnnie.isBabywalking())

// === tests equality of both value and type


// -- JavaScript Closure -- //
/*
    A Closure is a self-invoking function that only runs once.
    It can then set a variable(Which in our case will be a counter) and 
    returns a function expression.
​
    For this example, we will add to a number after the inital call to the closure has been made.
​
    BTW JavaScript Closures are another type of variable that can be created.
*/

let count_up = ( function() {
    let counter = 0; //this will be our private variable
    console.log('Hit')
    return function () {return counter++}
}) ()

let addNames = ( function () {
    let names = [];
    console.log('Adding Names')
    return function (name){
        console.log(names)
        return names.push(name)
    }
}) ()


// Async JavaScript Section //
// -- JavaScript Callbacks -- //
/*
    Simply put: A Callback is a function that is to be executed after another
    function has finished its execution - hence the name callback.
​
    More Complex Definition: In JavaScript, functions are objects. Because of this,
    functions can take other functions as arguments(parameters), and can return functions
    by other functions.
​
    Functions that do this are called "higher - Order functions". Any function,
    that is passed as an argument is called a "Callback function".
​
    SOOOO...why do we need them?
​
    The reason for this is, because of the JavaScript Event Loop. In a nutshell
    JavaScript is an event driven language so this means, that instead of waiting for 
    a response before moving on, JS will keep executing while listening for other events.
*/ 

// basic example
function first(){
    console.log(1)
} 

function second(){
    console.log(2)
}

first()
second()

// but what happens when we add delay to execution...
// function first_delay(){
//     // simulation of delay
//     setTimeout(function() {
//         console.log(1)
//     }, 5000)
// }

// function second_delay(){
//     console.log(2)
// }

// first_delay()
// second_delay()

// Callback function syntax

function doHomework(subject, callback){
    alert(`Starting my ${subject} homework`)
    callback()
}

// doHomework('JavaScript', function() {
//     console.log('Done with homework')
// })

/*
    Though Callbacks give us more functionality...they also introduce
    their own problem: Callback Hell
​
    Something that looks like this:
    function1( () => {
        function2( () => {
            function3( () => {
                function4( () => {
                    // Maybe do something here... 🤷🏾‍♂️
                })
            })
        })
    })
*/

// we solve the above problem with promises

/*
    ======= Creating a JS Promise =======
*/
const isEvenNumber = (num) => {
    return new Promise( (resolve, reject) => {
        if(num % 2 == 0){
            resolve(true)
        } else {
            reject(false)
        }
    })
}

// using a JS Promise
isEvenNumber(11)
// happy resolve path
.then( (result) => {
    console.log(`Even Number ${result}`)
} )
// sad reject path
.catch( (error) => {
    console.log(`Odd Number ${error}`)
})

// another example with promises using async/await
function increase_salary(base, increase) {
    const new_salary = base + increase;
    console.log(`New Salary: ${new_salary}`)
    return new_salary
}

// function to add to base salary slowly
function slow_addition(n1, n2){
    return new Promise( (resolve) => {
        setTimeout( () => resolve(n1 + n2), 2000)
    })
}

function increase_slow_salary(base, increase){
    const new_salary = slow_addition(base, increase);
    console.log(`New Salary: ${new_salary}`);
    return new_salary
}

async function async_increase_salary(base, increase){
    const new_salary = await slow_addition(base, increase);
    console.log(`The new salary is: ${new_salary}`);
    return new_salary
}