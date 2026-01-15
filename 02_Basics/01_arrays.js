// Array

const myarr = [0, 1, 2, 3, 4, 5]
const myheros = ["Narutowd", "Tanjiro", "Hinata", "Saturo Gojo"]
const myarr2 = [1, 2, 3, "Uday"]  //In js THE array is collection of mutiple data type

//console.log(myarr,myheros,myarr2)

console.log(myarr2[3]);

// ***** Array Method

// myarr.push(6)
// myarr.push(7)
// console.log(myarr) // add an new element from the end

// myarr.pop()
// console.log(myarr); //remove single element from the end 
  
// myarr.unshift(9)    //shift the values from the start by adding value
// console.log(myarr);

// myarr.shift()
// console.log(myarr);   // shift the value from the start by removing the value

console.log(myarr.includes(9));
console.log(myarr.indexOf(3));
console.log(myarr.indexOf(9));

const newarr =myarr.join();
console.log(myarr);
console.log(newarr);
console.log(typeof newarr);

// **************Slice & Splice*************

console.log("A", myarr);

const myn1 = myarr.slice(1, 3)   //  Deep copies
console.log(myn1);


console.log("B", myarr);

const myn2 = myarr.splice(1, 3)
console.log("C", myarr);
console.log(myn2);





