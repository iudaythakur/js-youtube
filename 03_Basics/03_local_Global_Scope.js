// local and variable scope
//**Global Sope */
// You can acces the global variable inside the scope 
 
let a = 34
let b = 35
let c = 36

if(true){
  
    console.log(a);
    console.log(b);
    console.log(c);

}
  

// ****Local scope 
// You can't access the variable inside the scope

if(true){
    let a = 12
    let b = 32
    let c = 16
    // console.log(a);
    // console.log(b);
    // console.log(c);

}

console.log(a);
console.log(b);
console.log(c);
