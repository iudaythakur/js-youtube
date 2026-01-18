// IIFE Imidiately Invoked Funtion Expression (IIFE) --> We use IIFE Bcz sometime the gobal scope polute the function to save funtion


// This how a normal function work 
// function coffe(){
//     console.log("DB Connected");
// }coffe()

(function coffe() {
    console.log(`DB Connected`);
})();                              // To run a 2 IIFE funtion you must end fist function with ;  Because the IIFE Function doest know where to end the context . SO end the context of IIFE funtion you use the IFFE funtion


// Similar for syntax for the arrow function

((username) => console.log(`DB Connected to ,${username}`))(`Uday`); 