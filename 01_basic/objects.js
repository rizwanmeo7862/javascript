
// object literal 
const mySymb = Symbol("key1")
const JsUser = {
    name : "Rizwan",
    email: "contactrizwanmeo@gmail.com",
    "full name" : "Muhammad Rizwan",
    location: "Punjab Pakistan",
    isLogIn: false,
    [mySymbol] : mySymb ,
    isLoginDays: ["Monday", "Saturday"]
}
console.log(JsUser["full name"])
console.log(JsUser[mySymbol])