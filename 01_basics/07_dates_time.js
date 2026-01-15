//Dates & Time********
// Type of date and time is object
//let mydate = new Date()
//console.log(mydate)
//console.log(mydate.toDateString());
//console.log(mydate.toLocaleString());

//console.log(typeof mydate);

//let mycreateddate = new Date(2026 , 0 ,15)   //Month strted from 0 in js.
//console.log(mycreateddate.toDateString());

//let mycreateddate = new Date(2026 , 0 , 15 , 10 , 2 )
//console.log(mycreateddate.toLocaleString());

let mycreateddate = new Date("01-15-2026") // in dd yy mm the 1 month started from the 01
console.log(mycreateddate.toDateString());
console.log(mycreateddate.toISOString());
console.log(mycreateddate.toLocaleDateString());
console.log(mycreateddate.toTimeString());
console.log(mycreateddate.toUTCString());
console.log(mycreateddate.toJSON());





/**********************Time********************** */


let mytimestamp =  Date.now()
console.log(mytimestamp);   //gives value in mili second majored from the 1970 12:00 AM

console.log(mycreateddate.getTime()); // getTime will now major the time form the date we declared in the a varible . 
 
