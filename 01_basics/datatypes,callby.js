// Datatypes are generally of 2 types

/* 1. Primitive = call by value (stack memory)  
 2. Non Primitive memory = Call by refrence (Heap memory)*/


 // Primitive

 // 7 Types : number, string, boolean, null , undefined , symbol , bigint

 /*
 
 const score = 100
 const isloggedin = true
 const tempoutside = null
 const username1 = "user23"
 //etc

 // Non premitive data types 

// Array, objects , functions

const arrayheros = ["Ironman", " THor", "Wanda"]


let myobj = {
    userid: "user1",
    gender: "m"
}

const myfunction = function name(params) {
    
}


*/

// ****************** Memory*************************

// Stack (Primitive) , Heap (NON Primitive)


// 1. Stack = In this when we call the value it copies from the orignal value and does'nt change the orignal value  
// IN this data is stored in the stack Follow the LIFO 


let myoffname = "udaythakur"
let mynickname = myoffname  

console.log(mynickname);

mynickname = "rishu" // Here it does change the orignal value instead provied the copy of this value

console.log(myoffname);
console.log(mynickname);


// Heap = NOn Primitive data types
// Means you get the refrence of orignal value 

let userone ={
    email: "user@gmail.com",
    upiid: "user@okhdf",
}

let usertwo = userone

usertwo.email = "Uday@gmail.com"  // This will change the orignal value 

console.log(userone.email);
console.log(usertwo.email);
 