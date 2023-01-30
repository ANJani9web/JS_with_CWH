// prompt Asks from the user
// alert shows the result to the user

let a = prompt("Hi, What is your age ?")
//console.log(typeof a)  // here 'a' is of string type

a = Number.parseInt(a) // Converting a string to integer
console.log(a)

alert("The value of a is ",a)

// ternary operator

console.log("condition ? Yes_Case : No_Case")
console.log(a<18 ? "Can not drive" : "Can Drive")