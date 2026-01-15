// Singleton
// Object.create  {This is called constructre / this make singleton}



// Object literals

const mysym = Symbol("key1")



const JSuser = {
    name: "Uday",       // name it self is string in object
    "Full_name": "Uday_Thakur", // You can also write this into this form 
    age: 20,

   // mysym: "mykey1", Value same aye gi dono main but the correct way to use symbol us []

    [mysym]: "mykey1",
    location: "Chandighar",
    email: "meudaythakurr@gmail.com",
    dologgedin: false,
    lastloggedin: ["Monday","Tuesday"],
}

console.log(JSuser.email);
//console.log(JSuser.Full_name);   **You can never acces in such way when you declared the element in object using string 
console.log(JSuser["Full_name"]);  //In this way you can acces the both default string element & strings that you declare in the object
console.log(JSuser["location"]);
console.log(JSuser.location);


// *** Symbol ko use or acces krne ke liye in the object

console.log(JSuser.mysym);
console.log(typeof JSuser.mysym);

console.log(JSuser[mysym]); // In this way you can acces the symbol in object
console.log(typeof JSuser[mysym]);



JSuser.email = "uday@google.com" // By this way You can change the value of element in object 
//Object.freeze(JSuser)            // OR by this way you can freeZe the values of element
JSuser.email = "uday@chatgpt.com" 
console.log(JSuser)

// ******Functions************//

JSuser.greeting = function(){
    console.log("Hello JS user");
    
}


JSuser.greetingtwo = function(){
    console.log(`hello JS users , ${this.name}`);
    
}

console.log(JSuser.greeting);      // **
console.log(JSuser.greetingtwo);
console.log(JSuser.greeting());     //* */
console.log(JSuser.greetingtwo());