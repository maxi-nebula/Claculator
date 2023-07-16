/** @format */

const numberButtons = document.querySelectorAll(".button");
const resultDiv = document.querySelector(".result");
const expressionDiv = document.querySelector(".expression");
const deleteButton = document.getElementById("DEL");
// variables initial assignment
let numberEntered = "";
let operator = "";
let queueArray = [];
let isOperator = false;
let operatorArray = ["+", "-", "/", "*", "%", "="];
let disNumber = "";

//when a button is clicked we send the button's value to display area and also to identify if it an operator or an operand
numberButtons.forEach((item) => {
  item.addEventListener("click", () => {
    disNumber = displayNumber(item.innerText);

    //our identify input function
    identifyInput(disNumber, operatorArray, item.innerText);

    if (item.innerText == "AC") {
      clearScreen();
    }
  });
});
// our number gets displayed in the display area using this function
displayNumber = (number) => {
  //clears the screen when AC is pressed
  if (number == "AC") {
    clearScreen();
    return 0;
  }
  //backspace operation peformed here
  else if (number == "DEL") {
    numberEntered = numberEntered.substring(0, numberEntered.length - 1);
    if (numberEntered != "") {
      resultDiv.innerText = numberEntered;
      return numberEntered;
    } else {
      resultDiv.innerText = 0;
    }
  }
  //diplay the number
  else {
    numberEntered = numberEntered + number;

    resultDiv.innerText = numberEntered;
    return numberEntered;
  }
};

// to clear the screen when 'AC' button is clicked
clearScreen = () => {
  resultDiv.innerText = "0";
  expressionDiv.innerText = "";

  numberEntered = "";
  queueArray = [];
};

//identify's the input
identifyInput = (dNum, opArray, cItem) => {
  if (opArray.includes(cItem)) {
    pushNum = dNum.substring(0, dNum.length - 1);

    queueArray.push(pushNum);

    if (cItem == "=") {
      performOperation(queueArray, dNum);
    }
  }

  //performs required operation
  performOperation = (qArray, dNum) => {
    let result = eval(`${qArray[qArray.length - 1]}`);

    resultDiv.innerText = result;

    addExpression(dNum);
  };
  //adds the expression on the top of the result
  addExpression = (dNum) => {
    const newtext = document.createTextNode(dNum);
    const p1 = document.getElementById("expressiondiv");

    p1.appendChild(newtext);
  };
};
