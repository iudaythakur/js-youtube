const score = 300
//console.log(score)

const balance = new Number(100)
//console.log(balance);

//console.log(balance.toString())
//console.log(balance.toString().length)
//console.log(balance.toFixed(2))

let othernumber = 124.343

//console.log(othernumber.toPrecision(4)) //Roundoff

const hundreds = 10000000
//console.log(hundreds.toLocaleString('en-IN'));



//**************************Maths*********************** */
// Math is gobal object
console.log(Math);
console.log(Math.abs(-4));   // Remove - from negitive value
console.log(Math.round(4.6));  // Round off
console.log(Math.ceil(2.4));  // Round off TO next value always
console.log(Math.floor(7.8)); // Round off TO current value
console.log(Math.min(4, 54, 55, 443, 2, 1));  // Min value
console.log(Math.max(3, 555, 63, 46334, 4, 6543, 2)); // Max value 

console.log(Math.random());
console.log(Math.random() * 10);
console.log((Math.random() * 10) + 1);  // Taki hame 0 value na mile km se km 1 to aye 

console.log(Math.floor(Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

