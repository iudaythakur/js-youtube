// Truthy values --> Means when we check conditions some values are considered truth like empty string/ string / [] empty array also considered as tuthy value


// const username = "Uday@google.in"

// if (username == "Uday@google.in") {  // These are called truthy values
//     console.log(`${username} This is the user id`);
// }

// const username = " "

// if (username) {                                    // --> These are called truthy values/ Similar for empty arrays []
//     console.log(`${username} This is the user id`);
// }
 

// const username = ""

// if (username) {                                    // --> These are called falsy values/ Similar for empty arrays []
//     console.log(`${username} This is the user id`);
// } else {
//     console.log("Don't have username");
    
// }



// const username = []

// if (username.length === 0) {                  // --> You can't simply acces the empty array/object just refrencing/contexting it                   
//     console.log(`${username} This is the user id`);
// }
 

const username = {}

if (Object.keys(username).length === 0) {                  // --> Here we convert the object into array               
    console.log(`${username} This is the user id`);
}
 



/**Falsy values --->  "", false, 0, -0, bigint = 0n, null, notdefined, NaN   */

/**Truthy values ---> "0", 'false', "  ", {}, [] , funtiion(){} **/