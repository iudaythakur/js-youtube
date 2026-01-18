/**This allows one funtion to adapt many object */


const user = {
    username: "Uday Thakur",
    price: "999",


    welcomemessage: function () {
        console.log(`${this.username} , Welcome to website `);
        console.log(this);


    }

}

// user.welcomemessage()

// user.username = "Sam" // value change and than print
// user.welcomemessage()

// console.log(this);



function chai() {
    console.log(this);
}
// chai()




// This will give the current reference fist it check the parent object and then it will check the global object .
/*** Back then when we run java script and force this to check the global object like this
console.log(this);

function chai(){
console.log(this); 
chai()
  and thier is no refrenece avilable then this has return some values like windows object  */




/****Arrow Function  -> They don't have their own identity they stick to their parent function --> IT used in react very very much **/


// const coffe = function () {
//     let username = "Udayyythakur03"
//     console.log(this.username);
// }
// coffe()


// const coffe = ()  => {
//     let username = "Udayyythakur03"
//     console.log(this)
// }
// coffe()


// () => {} syntax of arrow funtion ---> Known as implicit way no need of return 

// const addtwo = (num1, num2) => num1 + num2

// console.log(addtwo(2, 3));

//or

// Knowna as explicit way when we use {} return used in implicit we remove the {} then no need of return 

// const addtwo = (num1, num2) => { 
//     return num1 + num2
// }

// console.log(addtwo(2, 3));



/*** To return object in => (arrow function)  we use this syntax --> ()  => ({_inside_object_written})*/

const addtwo = (num1, num2) => ({username: "Uday Thakur"})

console.log(addtwo(2,3));