// Scope level/ Nested scope


// console.log(username);

if (true) {

    username = "udayyythakur"

    // console.log(website);
    if (username === "udayyythakur") {
        website = "Instagram"
        console.log(website + username);
    }
    

}

// Mini hosting 
// JS have a nature in which it always take the declaration on the top

console.log(addone(5))
function  addone(num){
    return num + 1
}

// console.log(addtwo(5))  // Here you will get error the funtion in addtwo not  ti be accesed
// const addtwo = function(num){  // This Funtion is also known as expression
//     return num + 2 
// }