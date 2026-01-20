// fOR EACH ---> Most used = in array
// for each = call by back function ,
// for each = heigh ordr array loops

const coding = ["js", "ruby", "python", "cpp"];
// Syntax ---> name_of_array.forEach( function ()  {} )
coding.forEach(function (/**here no name fo function */ value) {
  // console.log(value);
});

// Syntax ---> name_OF_array.forEach( () => {} )
coding.forEach((item) => {
//   console.log(item);
});


function printme(iteam){
    console.log(iteam);
}

// By passing the functions

// coding.forEach(printme)

