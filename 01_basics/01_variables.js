const accountId = 12432
let accountEmail = "contact@dhruvgupta.tech"
var accountPassword = "12345678"
accountCity = "Jaipur"
let accountState;

//accountId = 45446 --> not allowed
accountPassword = "987987"
console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
/* Prefer not to use var because of 
issue in block scope and functional scope */ 
//Test Change