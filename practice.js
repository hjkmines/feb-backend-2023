class Car {
    constructor(price, color, mileage, brand) {
        this.price = price; 
        this.color = color; 
        this.mileage = mileage
        this.brand = brand
    }

    drive() {
        console.log('Im driving!')
    }

    stop() {
        console.log('Im stopping!')
    }
}

const toyota = new Car(2000, 'red', 50, 'toyota')

console.log(toyota.drive())










const newArray = new Array()

newArray.push(9)
console.log(newArray.length)










