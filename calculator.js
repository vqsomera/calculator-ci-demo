//----------------------------------------
function add(a, b) {

    return a + b;

}

//----------------------------------------
function multiply(a, b) {
    return a * b;
}

//----------------------------------------
function subtract(a, b) {
    return a - b;
}

//----------------------------------------
function divide(a, b) {
    if (b == 0) {
        console.error("Division by zero error."); //writes to standard error stream
        return undefined;
    }
    return a / b;
}

//----------------------------------------
function square(a) {

    return a ** 2;
}

//----------------------------------------
function cube(a) {

    return a ** 3;
}

/* eslint-disable no-unused-vars */ // Add this line to stop the lint errors for the UI functions

/* --- Part 2: UI Bridge (Used by your buttons in index.html) --- */
//----------------------------------------
function uiAdd() {
    // 1a. Get the values from the input boxes
    var val1 = document.getElementById("num1").value;
    var val2 = document.getElementById("num2").value;

    // 1b. Check if either of the values is empty
    if (val1 === "" || val2 === "") {
        document.getElementById("result").innerText = "Error: Both Number1 and Number2 are required";
        return;
    }

    // 1c. Convert to number
    var n1 = Number(val1);
    var n2 = Number(val2);

    // 2. Call the math function
    var result = add(n1, n2);

    // 3. Update the result on the page
    document.getElementById("result").innerText = result;
    //document.getElementById("result").value = result;

}

//----------------------------------------
function uiSubtract() {
    // 1a. Get the values from the input boxes
    var val1 = document.getElementById("num1").value;
    var val2 = document.getElementById("num2").value;

    // 1b. Check if either of the values is empty
    if (val1 === "" || val2 === "") {
        document.getElementById("result").innerText = "Error: Both Number1 and Number2 are required";
        return;
    }
    // 1c. Convert to number
    var n1 = Number(val1);
    var n2 = Number(val2);

    var result = subtract(n1, n2);

    document.getElementById("result").innerText = result;
    //document.getElementById("result").value = result;

}

//----------------------------------------
function uiMultiply() {

    // 1a. Get the values from the input boxes
    var val1 = document.getElementById("num1").value;
    var val2 = document.getElementById("num2").value;

    // 1b. Check if either of the values is empty
    if (val1 === "" || val2 === "") {
        document.getElementById("result").innerText = "Error: Both Number1 and Number2 are required";
        return;
    }
    // 1c. Convert to number
    var n1 = Number(val1);
    var n2 = Number(val2);

    var result = multiply(n1, n2);

    document.getElementById("result").innerText = result;
    //document.getElementById("result").value = result;

}

//----------------------------------------
function uiDivide() {

    // 1a. Get the values from the input boxes
    var val1 = document.getElementById("num1").value;
    var val2 = document.getElementById("num2").value;

    // 1b. Check if either of the values is empty
    if (val1 === "" || val2 === "") {
        document.getElementById("result").innerText = "Error: Both Number1 and Number2 are required";
        return;
    }
    // 1c. Convert to number
    var n1 = Number(val1);
    var n2 = Number(val2);

    var result = divide(n1, n2);

    // Check if result is undefined (division by zero)
    if (result === undefined) {
        document.getElementById("result").innerText = "Error: Cannot divide by 0";
    } else {
        document.getElementById("result").innerText = result;
        //document.getElementById("result").value = result;
    }
}

//----------------------------------------
// Power operation (Check only for Number 1)
function uiSquare() {
    // 1a. Get the value from the input boxes
    var val1 = document.getElementById("num1").value;

    // 1b. Check if Number 1 field is empty
    if (val1 === "") {
        document.getElementById("result").innerText = "Error: Number 1 is required";
        return;
    }
    // 1c. Convert to number
    var n1 = Number(val1);

    var result = square(n1);

    document.getElementById("result").innerText = result;
    //document.getElementById("result").value = result;

}

//----------------------------------------
// Cube operation (Check only for Number 1)

function uiCube() {

    var val1 = document.getElementById("num1").value;
    //var n2 = Number(document.getElementById("num2").value);

    if (val1 === "") {
        document.getElementById("result").innerText = "Error: Number 1 is required";
        return;
    }
    var n1 = Number(val1);

    var result = cube(n1);

    document.getElementById("result").innerText = result;
    //document.getElementById("result").value = result;
}

//----------------------------------------
//module.exports = { add, multiply, subtract, divide, square, cube };
if (typeof module !== 'undefined') {
    module.exports = { add, multiply, subtract, divide, square, cube };
}
