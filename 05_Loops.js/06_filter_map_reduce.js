// Filter ---> It is similar to for each loop but it can return the value\

let coding = ["js", "ruby", "python", "cpp"];

// coding.forEach((iteam) => console.log(iteam))

/********************Here we can see that for each does not return any value fundamentally */

// let values = coding.forEach((iteam) => iteam)  // If we do not open scope their is no need of writting the return for getting the value return form function as we studied in the arrow function
// console.log(values);

let values = coding.forEach((iteam) => {
  // console.log(iteam)
  return iteam; // YOu will undifgined result when use return in the for each
});

console.log(values); // Undefinied

/*********************Fiter ---> Can use return to return values and it is same as the for each loop */

// let value1 = coding.filter( (iteam) => iteam)

// // console.log(value1);

let value1 = coding.filter((iteam) => {
  return iteam;
});

console.log(value1);

/******** **************************************************/

const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let outputnums = mynums.filter( (num) => num>7)
// console.log(outputnums);


/********* What if we want to use for each to stisfy our condition then we use if statement in the for each */
let outputnums = mynums.forEach((nums) => {
  if (nums > 7) {
    console.log(nums);
  }
});

console.log(outputnums);






/******************************************************* */

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },

    // 🔥 Added 3 new examples
    { title: 'Book Eight', genre: 'Science Fiction', publish: 2015, edition: 2020 },
    { title: 'Book Nine', genre: 'Biography', publish: 2001, edition: 2011 },
    { title: 'Book Ten', genre: 'Philosophy', publish: 1995, edition: 2005 }
];


let givemybooks = books.filter( (bks) => bks.genre === "Fiction" )
console.log(givemybooks);


// let givemybooks = books.filter( (bks) => bks.publish >= 1987 )
// console.log(givemybooks);


// let givemybooks = books.filter( (bks) => bks.publish >= 1987 && bks.genre === "Fiction" )
// console.log(givemybooks);


// let givemybooks = books.filter( (bks) => bks.publish >= 1987 && bks.genre === "Fiction" || bks.publish >= 1981 )
// console.log(givemybooks);