// Service, Business Logic aka process input (different for every company)
function getCalculation(calculatedValues) {
    let mathResult = null;
    console.log(calculatedValues.type);
    if (calculatedValues.type === "addition") {
        mathResult = Number.parseInt(calculatedValues.value1) + Number.parseInt(calculatedValues.value2)
    } else if (calculatedValues.type === "subtraction") {
        mathResult = calculatedValues.value1 - calculatedValues.value2
    } else if (calculatedValues.type === "multiplication") {
        mathResult = calculatedValues.value1 * calculatedValues.value2
    } else if (calculatedValues.type === "division") {
        mathResult = calculatedValues.value1 / calculatedValues.value2
    } else {
        console.log("bro I don't even know what you typed");
    }
    return mathResult;
}