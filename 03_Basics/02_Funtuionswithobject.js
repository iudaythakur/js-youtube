// Working with the functions and object together

function calculatecartprice(val1, val2, ...num1){  // Here this ... known as rest instead of spread
     return num1
}

//console.log(calculatecartprice(100,299,399,233,4343,5435,3234,2342,));


const user = {
      username: "Uday Thakur",
      price: 345
}

function handelobject(anyobject){
    console.log(`${anyobject.username} is the name of buyer and ${anyobject.price}   this is price of iteam`);
    return anyobject
}

handelobject({
    username: "Hitesh",
    price: 300
})

// we can also pass the object and array in the funtions

const myarry = [300, 400, 500, 600]

function handelmyarry(getarray){
   return getarray[3]
}

console.log(handelmyarry(myarry));

