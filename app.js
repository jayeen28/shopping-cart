//functions
function updateCaseNumber(inputId, isAdd) {
    const caseInput = document.getElementById(inputId);
    const caseText = caseInput.value;
    const caseNumber = parseInt(caseText);
    if (isAdd == true) {
        caseInput.value = caseNumber + 1;
    }
    else {
        if (caseNumber > 0) {
            caseInput.value = caseNumber - 1;
        }
    }
}

document.getElementById('case-plus').addEventListener('click', function () {
    updateCaseNumber('case-input', true);
});
document.getElementById('case-minus').addEventListener('click', function () {
    updateCaseNumber('case-input', false);
})