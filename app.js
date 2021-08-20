//Created by MD. Jayeen Bin Alam//
//functions
//case increase decrease function
function getInputValue(product) {
    const productInputText = document.getElementById(product + '-input').value;
    const productInputNumber = parseInt(productInputText);
    return productInputNumber;
}
function updateProductNumber(product, isIncreasing, price) {
    let productNumber = getInputValue(product);
    if (isIncreasing == true) {
        productNumber = productNumber + 1;
    }
    else if (productNumber > 0) {
        productNumber = productNumber - 1;
    }
    document.getElementById(product + '-input').value = productNumber;
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    calculateTotal(product);
}
function calculateTotal(product) {
    const phoneTotalPrice = getInputValue('phone') * 1219;
    const caseTotalPrice = getInputValue('case') * 59;
    const subTotal = phoneTotalPrice + caseTotalPrice;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}
//phone increase decrease function
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', true, 1219);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', false, 1219);
});
//case increase decrease events
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', true, 59);
});
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', false, 59);
});
