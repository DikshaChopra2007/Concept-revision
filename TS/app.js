//Basic type 
//Primitive types(number , string,boolean)
// arrays 
//tuples
//enums
//any , unknown , void ,null , undefined , never
//primitive and refrence 
//[]  { }  ()
// in teeno mein se koi bhi ek bracket lag gya toh 
//woh refercnce type hoga 
//aur bracket nhi lage toh primitive
//primituve can be copied directly 
//refrence ko directly copy nhi kr sakte 
/*var = 12;
var b= a;
//
var a = [1,23,45,34,56];
var b=a;
// b ki value a hai -- agar b mein kuch change hua hai toh woh a mien bhi hoga

// use let and const
let arr = [1,2,3];

//tuples
let arr: [string,number] =["harsh",22];*/
//enums--> enumerations
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super_admin";
})(UserRoles || (UserRoles = {}));
var StatusCodes;
(function (StatusCodes) {
    StatusCodes["ABANDONED"] = "abandoned status code 500";
    StatusCodes["NOTFOUND"] = "not found status code 404";
})(StatusCodes || (StatusCodes = {}));
StatusCodes.NOTFOUND;
export {};
//# sourceMappingURL=app.js.map