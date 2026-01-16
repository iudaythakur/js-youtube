// const tinderuser = new object **** This is s singletone object

const tinderuser ={}
      tinderuser.id = "123abc"
     tinderuser.email = "uday@gmail.com"
     tinderuser.isloggedin = false

     //console.log(tinderuser);

     const regularuser = {
        email: "meudaythakurr@gmail.com",
        username: {
            userfullname: {
                firstname: "Uday",
                lastname: "Thakur",
            }
        }
     }
     
    //  console.log(regularuser);
    //  console.log(regularuser.username);
     console.log(regularuser.username.userfullname.firstname);
     
     const obj1 = { 1: "a", 2: "b"}
     const obj2 = { 3: "c", 4: "d"}
     const obj3 = { 5: "e", 6: "f"}

     //const obj4 = { obj1, obj2, obj3 }  // WE don't do this because same problem as array all we come in inside of another array and then a array have them
     //const obj4 = Object.assign({}, obj1, obj2, obj3)
                            //    {} ->  This is the place where the all obj go
                            //    if we dont assign this then obj1 -> will be considered the source of all the 0bject


     const obj4 = {...obj1, ...obj2, ...obj3}
     console.log(obj4);

//     ************Object ko array ke sath user krna******** */
     const user = [
        {
            id: 1,
            email: "Udayyy@gmail.com",
        },
          {
            id: 2,
            email: "Udayyy1@gmail.com",
        },
          {
            id: 3,
            email: "Udayyy2@gmail.com",
        },
          {
            id: 4,
            email: "Udayyy3@gmail.com",
        },
          {
            id: 5,
            email: "Udayyy4@gmail.com",
        },
     ]
     
     
console.log(user);

console.log(user[0].id);
console.log(user[0].email);



console.log(tinderuser);

console.log(Object.keys(tinderuser));  // Output the keys
console.log(Object.values(tinderuser)); // Output the values
console.log(Object.entries(tinderuser)); // Output both the keys and value combined





