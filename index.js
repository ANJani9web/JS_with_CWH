// Question 01

let age = prompt("What is your age ?")
if (age > 10 && age < 20) {
  console.log("Your age lies between 10 and 20")
}
else {
  console.log("Your age does not lie between 10 and 20")
}

// Question 02
let a = prompt("What is your age ?")
switch (a) {
  case '4':
    console.log("Your age is 4")
    break

  case '24':
    console.log("Your age is 24")
    break

  case '55':
    console.log("Your age is 55")
    break

  default:
    console.log("Your age is not special")
}

// Question 03
let num = prompt("Enter a number")
num = Number.parseInt(num)
if (num % 2 == 0 && num % 3 == 0) console.log(num + " is divisible by 2 and 3.")
else console.log(num + " is not divisible by 2 and 3.")

// Question 05
console.log(age>18?"You can drive" : "You can not drive")