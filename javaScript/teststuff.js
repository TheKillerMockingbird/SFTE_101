// function printMessage(msg) {
//     console.log(msg || "Default Message");
// }
// printMessage("");
// printMessage(null);
// printMessage("Hello");

// class Monster {
//     constructor(name, cr) {
//         this.name = name;
//         this.cr = cr;
//     }
// }

// let student = { firstName: "Judah",
//                 lastName: "Olson",
//                 dateOfBirth: "July 5th",
//                 studentID: "123456789",
//                 collegeName: "Bushnell"
// };

// class Student {
//     constructor(firstName, lastName, dateOfBirth, studentID, collegeName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dateOfBirth = dateOfBirth;
//         this.studentID = studentID;
//         this.collegeName = collegeName;
//     }
// }

// let judah = new Student("Judah", "Olson", "07/05/2006", 22364, "Bushnell")

// class Employee extends Student {};
// function test() {
//     return;
//     console.log("Hello");
// }
// console.log(test());

// function add(a, b = 5) {
//     return a + b;
// }
// console.log(add(10));
// function check(x) {
//     return x % 2 === 0;
// }
// console.log(check(7));
// function printMessage(msg) {
//     console.log(msg || "Default Message");
// }
// printMessage("");
// printMessage(null);
// printMessage("Hello");

// class Vehicle {
//     constructor(color, currentSpeed, maxSpeed) {
//     this.color = color;

//     this.currentSpeed = currentSpeed;
//     this.maxSpeed = maxSpeed;
//     }
//     move() {
//     console.log("moving at", this.currentSpeed);
//     }
//     accelerate(amount) {
//     this.currentSpeed += amount;
//     }
//    }


//    class Motorcycle extends Vehicle {
//     constructor(color, currentSpeed, maxSpeed, fuel) {
//     super(color, currentSpeed, maxSpeed);
//     this.fuel = fuel;
//     }
//     doWheelie() {
//     console.log("Driving on one wheel!");
//     }
//    }

//    let motor = new Motorcycle("Black", 0, 250, "gasoline");
//    console.log(motor.color);
//    motor.accelerate(50);
//    motor.move();

//    class Car extends Motorcycle {
//     constructor(doors, passengers, wheel) {
//         super(this.color, this.currentSpeed, this.maxSpeed, this.fuel, doors, passengers, wheels)
//     }
//    }

class Person {
    constructor(name) {
        this.name = name;
    }
}
const john = new Person("John");
console.log(john.name);