const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Batman", "Superman", "Flash"]

// marvel_heros.push(dc_heros)  // Give output of array inside array
// console.log(marvel_heros) 
 
// const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);  // Only for joining 2 arrays


// ********* Spread (...)
const all_heros = [...dc_heros , ...marvel_heros]
console.log(all_heros);  // can join more than 2 arrays

const another_array = [1,2,3,[4,5,6],7,[2,3[4,5]]]
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);


console.log(Array.isArray("uday"));
console.log(Array.from("uday"));

console.log(Array.from({name: "uday"})); // special case


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));