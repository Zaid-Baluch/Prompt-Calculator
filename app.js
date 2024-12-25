var num1 = +prompt("write the first num");
var operator = prompt("what you want to do(+,-,/,*)");
var num2 = +prompt("write the second num");
var result;

if (operator === "+") {
  result = num1 + num2;
} else if (operator === "-") {
  result = num1 - num2;
} else if (operator === "/") {
  result = num1 / num2;
} else {
  result = num1 * num2;
}

alert("the result is " + result);
