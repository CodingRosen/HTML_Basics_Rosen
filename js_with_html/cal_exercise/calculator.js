
// This will be invoked after the browser loads all HTML
window.onload = function () {
    console.log('Calculator loaded!');
    // create event listener for the button (note to remember to not use the form tag!)
    document.getElementById("submitBtn").addEventListener("click", calculationController);
}

// Controller Function - will get the values, process values, display values
function calculationController() {
    // 3 steps
    
    // 1. read input
    let userInputValues = getInputValues();
    // 2. process input
    let result = getCalculation(userInputValues);
    console.log("This is the result: " + result );
    // 3. Display processed data to users
    setView(result);
}













// // Read Input Logic (same proces for every application)
// function getInputValues() {
//     let value1Input = document.getElementById('value1').value;
//     let value2Input = document.getElementById('value2').value;
//     let calculationTypeInput = document.getElementById("calculationType").value;

//     return {
//         value1: value1Input,
//         value2: value2Input,
//         type: calculationTypeInput
//     }
// }

// // Service, Business Logic aka process input (different for every company)
// function getCalculation(calculatedValues) {
//     let mathResult = null;
//     console.log(calculatedValues.type);
//     if (calculatedValues.type === "addition") {
//         mathResult = Number.parseInt(calculatedValues.value1) + Number.parseInt(calculatedValues.value2)
//     } else if (calculatedValues.type === "subtraction") {
//         mathResult = calculatedValues.value1 - calculatedValues.value2
//     } else if (calculatedValues.type === "multiplication") {
//         mathResult = calculatedValues.value1 * calculatedValues.value2
//     } else if (calculatedValues.type === "division") {
//         mathResult = calculatedValues.value1 / calculatedValues.value2
//     } else {
//         console.log("bro I don't even know what you typed");
//     }
//     return mathResult;
// }
//The View Logic -  Display output to User
// function setView(result) {
//     console.log('...setting view with result');
//     let resultTag = document.getElementById('resultTag');
//     resultTag.innerHTML = result;
// }
