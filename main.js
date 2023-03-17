// number1

let numbers = []
let a

for (let i = 0; i <= 10; i++) {
    a = Number(prompt())
    if (a < 10) {
        numbers.push(a)
    }
}

for (a of numbers) {
    console.log(a)
}

// number2

let name = prompt("enter your name")
let age = Number(prompt("enter your age"))

if (age > 14) {
    alert("hi, " + name)
}
else {
    alert("who are you, " + name + "?")
}