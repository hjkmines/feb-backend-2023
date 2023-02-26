// primative

// boolean 
true 
false

// null/undefined
null 
undefined

// number 
1
9999999

// big int
99999999+

// string
'hello goodbye'

// variables
let - locally scoped, reassingable - second preferred
const - locally scoped, non-reassignable - preferred
var - globlally scoped,  reassingable - DO NOT USE

// type coercion
'2' == 2 --> true, checks for only data value
'2' === 2 --> false, checks for data type AND value

// two ways to write a function

function sayHello() {
    console.log('say hello')
}

const sayHello = () => {
    console.log('say hello')
}

// 3 types of functions: 

// first class function
const someNumber = 9
const someString = 'sdfiojdiosj'
const doSomething = () => {
    console.log('say hello')
}

// higher order function
const testSomething = (someFunction) => {
    someFunction()
}

// callback 
const testSomething1 = (someFunction) => {
    someFunction()
}

useEffect(() => {
    fetch('www.google.com')
}, [])

const array1 = [1, 2, 3, 4, 5]

array1.filter(num => num !== 3)

// scoping
const name1 = 'Tony'

const someTestFn = () => {
    const name2 = 'Elena'
    if (true) {
        const name3 = 'Thomas'
        if (true) {
            const name4 = 'Jerry'
        }
    }
}

// for loops
for (let i = 0; i < array.length; i++) {
    const element = array;
}

for (const num of array) {
    console.log(num)
}

const profiles = [
    {
        name: 'Tony', 
        age: 88
    },
    {
        name: 'Michael', 
        age: 33
    },
    {
        name: 'Jerry', 
        age: 823
    }
]

for (const { name, age } of profiles) {
    console.log(name, age)
}

const profile = {
    name: 'Jerry', 
    age: 823, 
    address: 'some address'
}

for (const property in profile) {
    console.log(property)
}

// Array methods

const numbers = [1, 2, 3, 4, 5]

NM - non mutative
M - mutative

filter - NM 
const newNumber = numbers.filter(num => num !== 3)

find - NM 
const find4 = numbers.find(num => num === 3)

slice - NM // slice(startIndex, endIndex - Optional)

const letters = ['a', 'b', 'c', 'd', 'e']
                  0    1    2    3    4
numbers.slice(2, 3) ---> []

splice - M // splice(startIndex, deleteCount - requred, itemToAdd1, itemToAdd2, .......)
numbers.splice(2, 1, 'H')

push - M 
numbers.push('f')

unshift - M 
numbers.unshift(1)

shift - M
numbers.shift()

pop - M 
numbers.pop()

includes - NM 
numbers.includes('e')

indexOf - NM 
numbers.indexOf('z')

map - NM 
numbers.map(num => num + 2)

forEach - NM 
numbers.forEach(num => num + 2)

reduce - NM // reduce((accumulator, currentVal) => , accumulatorInitiator)

const numbers = [1, 2, 3, 4, 5]

const sum = numbers.reduce((total, current) => total + current, 0)


// --------------- OBJECTS ------------------
const profile = {
    name: 'Tony', 
    age: 99, 
    address: 'Some Address'
}

// setting new key value pairs 
profile.height = 6
profile['height'] = 6

// accessing 
profile.height
profile['height']

const properties = Object.keys(profile) -> ['name', 'age', 'address']

const values = Object.values(profile) -> ['Tony', 99, 'some address']

const entries = Object.entries(profile)


// SET { 1, 2, 3, 4, 5 }

const newSet = new Set()

newSet.add(1)
newSet.add(2)
newSet.add(3)
newSet.has(3)

// Map { name => 'tony', age => 99 }

const newMap = new Map()

// adding a new key value pair
newMap.set('name', 'Tony')

// check if a value exists 
newMap.has('Tony')

// retreiving a prop
newMap.has('name')

// DESTRUCTURING

const payload = {
    profile: {
        name: 'Tony', 
        age: 88, 
        favoriteMovies: [
            'Star Wars', 
            'Goonies', 
            'God Father', 
            'Scent of a woman'
        ]
    }, 
    schools: {
        colleges: {
            duke: {
                price: 200
            }
        }
    }
}

const {
    schools: {
        colleges: {
            duke: {
                price
            }
        }
    }
} = payload

const fetch = require('node-fetch')

const getPerson = () => {
    fetch('https://randomuser.me/api')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

const getPerson2 = async () => {

    try {
        const [result1, result2] = await Promise.all([
            fetch('https://randomuser.me/api'), 
            fetch('https://rickandmortyapi.com/api/character/7')
        ])

        const [randomuser, rickandmortyapi] = await Promise.all([
            result1.json(), 
            result2.json()
        ])

        console.log(rickandmortyapi)
    } catch (err) {
        console.log(err)
    }
}

console.log(getPerson2())

//// Classes

class Car {
    constructor(price, color, mileage) {
        this.price = price; 
        this.color = color; 
        this.mileage = mileage
    }

    drive() {
        console.log('Im driving!')
    }

    stop() {
        console.log('Im stopping!')
    }
}

const toyota = new Car(2000, 'red', 50, 'toyota')
