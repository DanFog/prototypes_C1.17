//expected input examples:
  //2 + 4
  //9 / 3
  //8 * 2
  //4 - 2
//determine if you have enough arguments passed in to perform the proper operation.  Each item with a space around it will be considered an argument
if(isNaN(process.argv[3])) {
  if(parseFloat(process.argv[4]) && parseFloat(process.argv[2])) {
    console.log(doMath(process.argv[2], process.argv[4], process.argv[3]));
  } else {
    console.log("not valid input");
  }
} else {
  console.log("not valid input, also");
}
//determine if you have an operand amongst the arguments

//call the math function

function doMath(num1, num2, operator) {
  console.log(num1 + " is num1, " + num2 + " is num2, " + operator + " is ths operator");
  if(operator === "X" || operator === "x" || operator === "*") {
    return parseFloat(num1) * parseFloat(num2);
  }
  else if (operator === "+") {
    return parseFloat(num1) + parseFloat(num2);
  }
  else if (operator === "-") {
    return parseFloat(num1) - parseFloat(num2);
  }
  else if(operator === "/") {
    return parseFloat(num1) / parseFloat(num2);
  }
}
