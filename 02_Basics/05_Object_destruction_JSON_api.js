//  ***********Object Destructring******

const course = {
    coursename: "JS Hindi",
    price: "Free",
    courseinstructor: "Hitesh Choudry"
}


/****We don't do this *****
// course.courseinstructure 
// console.log(course.courseinstructure);  What is we need to print this iteam mutiple line then we have to write the course.courseintructure . for how many time we need to print the cousreinstructure .
*/


// const {courseinstructure} = course
// console.log(courseinstructor);

const {courseinstructor: instrutor} = course
console.log(instrutor);

// syntax ->  const {key} = Object_name
// syntax to shorten key->  const {key: New_key_name} = Object_name






// ************JASON************

// {
//     "name": "uday",
//     "coursename": "JS hindi"
//     "Price": "Free"
// }

[
    {},
    {},
    {},
    {}
]