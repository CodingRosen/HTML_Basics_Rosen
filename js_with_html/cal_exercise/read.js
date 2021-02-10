// Read Input Logic (same proces for every application)
function getInputValues() {
    let value1Input = document.getElementById('value1').value;
    let value2Input = document.getElementById('value2').value;
    let calculationTypeInput = document.getElementById("calculationType").value;

    return {
        value1: value1Input,
        value2: value2Input,
        type: calculationTypeInput
    }
}