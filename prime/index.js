console.log("HELLO WORLD!")
var a = prompt("enter the value");
for (i = 2; i <= a / 2; i++) {
    if (a % i == 0) {
        alert("it is not prime no.");
    }
    else {
        alert("it is prime no.");
    }
}