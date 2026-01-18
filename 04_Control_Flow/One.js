// Control flow

const  marks = 200

if (marks > 100) {
    console.log(`Students Marks is: ${marks} he is passed`)
}


const temp = 23

if (temp > 40 ) {
    console.log(" The heat outside > 40 ")
} else {
    console.log("The heat outside <  40");
    
}


const balance = 1000

if (balance < 500) {
    console.log(`Current balance is  : ${balance} balance is < 500`);
    
} else if (balance < 750) {
    console.log(`Current balance is  : ${balance} balance is < 750`);
    
} else if (balance < 1000){
    console.log(`Current balance is  : ${balance} balance is < 1000`);
} else  if(balance < 1200) {
    console.log(`Current balance is  : ${balance} balance is < 1200`);  
}
 

// Concept of & (and)  --> all the conditions must be true to run if statement

const feespaid = true
const havegoogleaccount = true
const havediscordaccount = true

if (feespaid && havegoogleaccount && havediscordaccount) {
    console.log("Right now user can acces the BOOTCAMP");
    
} else {
    console.log("Right now user can't acces the BOOTCAMP");
}

// Concept of || (or) if any one conditon from the all is true then the statement can run
 

const loggedingoogle = true
const loggedinzoom = false

if (loggedingoogle || loggedinzoom) {
    console.log("User can Watch the recorded videos");
    
} else {
     console.log("User can't Watch the recorded videos");
}


