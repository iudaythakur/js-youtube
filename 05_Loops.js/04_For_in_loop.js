// for in loop  ---> Genrally used in the object for iterating them

const myobj = {
    js: "javascript",
    cpp: "c++",
    rb: "rubby",
    swift: "swift by apple",
} 


for (const key in myobj) {
    console.log(`${key} shortcut is for ${myobj[key]}`);
}

const programming = ["js","rb", "py", "java","cpp"]
for (const key in programming) { 
    // console.log(key); // By these in for in loop you get the output the value of keys
    console.log(programming[key]);
}