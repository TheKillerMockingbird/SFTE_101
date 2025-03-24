let a = 10, b = '10', c = 15;
//variable set^

console.log(a == b);
console.log(a === b);
console.log(a != c);
console.log(a !== b);
console.log(a > c);
console.log(a < c);
console.log(a >= 10);
console.log(a <= c);
//standard showing^

if (a < c) {
    console.log("a is less than c");
} else if (a === c) {
    console.log("a is equal to c");
} else {
    console.log("a is greater than c");
}
//condition statements^

let result = (a > c) ? "a is greater" : "a is not greater";
console.log(result);
//ternary operator

if (a < c && a === 10) {
    console.log("Both conditions are true");
}
if (a > c || a === 10) {
    console.log("At least one condition is true");
}
if (!(a > c)) {
    console.log("Negation: a is not greater than c");
}
//logical operator^

let grade = 'B';
switch (grade) {
    case 'A':
        console.log("Excellent");
        break;
    case 'B':
        console.log("Good");
        break;
    case 'C':
        console.log("Average");
        break;
    default:
        console.log("Invalid grade");
}
//switch statements