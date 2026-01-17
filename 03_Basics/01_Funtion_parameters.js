
function saymyname() {
    console.log("U");
    console.log("D");
    console.log("A");
    console.log("Y");
}

saymyname             // saymyname -> refrence
 saymyname()           // saymyname() -> execution 



//*********************Parameters
 function addtwonumbers(number1, number2){
    console.log(number1 + number2);
} 

//*************Argument
 addtwonumbers(2, 4)

//  const result = addtwonumbers(2,4)
//  console.log("Result: ", result);

function addtwonumbers(number1, number2) {
    // let result = number1 + number2
   // console.log("Result: ", result);
    return number1 + number2
} 

// addtwonumbers(2,3)
let result = addtwonumbers(2,3)
// console.log("Result: ", result);

function loginusermessage(username = "Human"){
    return `${username} just logged in`
}
 
// let msg = loginusermessage("Uday")
// console.log(msg);

// console.log(loginusermessage("Uday"));
// console.log(loginusermessage(""))
console.log(loginusermessage())


