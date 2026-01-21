// fOR EACH ---> Most used = in array
// for each = call by back function ,
// for each = heigh ordr array loops
// for each --> Can't return the value by giving return .

const coding = ["js", "ruby", "python", "cpp"];
// Syntax ---> name_of_array.forEach( function ()  {} )
coding.forEach(function (/**here no name fo function */ value) {
  // console.log(value);
});

// Syntax ---> name_OF_array.forEach( () => {} )
coding.forEach((item) => {
  //   console.log(item);
});

function printme(iteam) {
  // console.log(iteam);
}

// By passing the functions

// coding.forEach(printme)

coding.forEach(
  (
    iteam,
    index,
    array, // we can acces multiple iteams in the for each like value/iteams , index and complete array
  ) => {
    // console.log(iteam, index, array);
  },
);

const mycoding = [
  {
    languagename: "Javascript",
    languagefilename: "js",
  },
  {
    languagename: "C++",
    languagefilename: "cpp",
  },
  {
    languagename: "python",
    languagefilename: "py",
  },
];


mycoding.forEach( (iteam) => {
  console.log(iteam.languagefilename);
  
} )