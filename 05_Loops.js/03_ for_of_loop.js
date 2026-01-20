// for of loop --->   Generally used in maps to iterate them

const arr = [1,2,3,4,5]

for (const num of arr) {  // Object that are here referd are not belonged to object in js here object means that where you want to apply the loop
//     console.log(`${num} :- These are the number`);  
 }


// strings

const greeting = "Hello World"

for (const val of greeting) {
    console.log(`${val} :- Here are each single word of string`);
    
}


// Maps + How to apply for of loop in the Maps
// Maps are basiclly the object but  with more uniqness

const map = new Map()
map.set("IN" , "India")  // --->> key , value
map.set("USA", "United Stated of America")
map.set("FR", "France")
map.set("IN", "India")  // Here india is not printed again beacuse its the same value

// console.log(map);
for (const [key , value] of map) {
    console.log(`${key}, :- ${value}`);
}

const myobj = {
    game1: "NFS",
    game2: "Froza"
}


// Here in this case object are not iteratable 
for (const [key , value] of myobj) {
    // console.log(`${key} := ${value}`);

}