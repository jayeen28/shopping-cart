//functions
function updateCaseNumber(isIncreasing) {
    const caseInput = document.getElementById('case-input');
    const caseText = caseInput.value;
    const caseNumber = parseInt(caseText);
    if (isIncreasing == true) {
        caseInput.value = caseNumber + 1;
    }
    else {
        if (caseNumber > 0) {
            caseInput.value = caseNumber - 1;
        }
    }
}
document.getElementById('case-plus').addEventListener('click', function () {
    updateCaseNumber(true);
});
document.getElementById('case-minus').addEventListener('click', function () {
    updateCaseNumber(false);
})