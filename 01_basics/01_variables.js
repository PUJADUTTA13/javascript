const accountId=123445;
let accountEmail="puja@gmail.com";
var accountPassword="9090";
accountCity="asansol";
let accountState;

//accountId=2; //not allowed
accountEmail="pd@gc.com";
accountPassword="444";
accountCity="jamtara";

/*
prefer not use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
