// Reduce ---> have to main value accumulater and cuurent value
// Accumulater --> initlizes at what ever value you want . Initilizes bw the ) , 0 } in this way here it initilizes at 0
// Current value --> What ever value you give in Array and objects . Follows the iteration from the index of the array . After the interation is done then the new current value is = previous current value form the array + intilized current value


let myarray = [1,2,3,4,5,6,7,8,9,10]


// In basic function
let mytotal = myarray.reduce(function (accumulater , currentvalue)  {
   console.log(`accumulater : ${accumulater} and currenvalue ${currentvalue}`);
   return accumulater + currentvalue
} ,0 ) /****Here We define the accumulater value as 0 */
console.log(mytotal);


// In arrow function
let mytotal1 = myarray.reduce( (acc , curval) => acc + curval , 0)
console.log(mytotal);


let shophingcartlist = [
    {
        iteam: "Chicken",
        Price: 889
    },
     {
        iteam: "Eggs",
        Price: 999
    },
     {
        iteam: "Vegetable",
        Price: 3349
    },
]

let totalbill = shophingcartlist.reduce( (acc , iteam) => acc + iteam.Price , 0)
console.log(totalbill);
