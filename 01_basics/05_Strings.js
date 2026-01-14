// OLD WAY  of string

const username = "Amit"
const repocount ="23"

//console.log(username + "have this number of repo count" + repcount)

// New way of working with string

console.log(`Hello my name is ${username} and my repocount is ${repocount}`)

// This new way allow so much other methods in the string to work with 

const gamename = new String('uday-thakur-com')

console.log(gamename[3]);
console.log(gamename.__proto__);

console.log(gamename.length);
console.log(gamename.toUppercase);
console.log(gamename.charAt(2));
console.log(gamename.indexOf('t'));

const newstring1 = gamename.substring(0,4)  // here it does only 3 character like <,> 

console.log(newstring1);

const anotherstring = gamename.slice(-8,4)
console.log(anotherstring);

const newstringone = "   Uday   "
console.log(newstringone);
console.log(newstringone.trim());

const url = "https://uday.com/uday%20thakur"

console.log(url.replace('20','-'))

console.log(url.includes('Sundar'))

console.log(gamename.split('-'));