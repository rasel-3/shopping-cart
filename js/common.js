function getTextElementValueById(elementId) {

    const phoneTotal = document.getElementById(elementId);
    const phoneTotalValueString = phoneTotal.innerText;
    const phoneTotalValue = parseInt(phoneTotalValueString);
    return phoneTotalValue;

}
function setTextElement(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;

}
function calculateSubtotal() {
    const phoneTotalValue = getTextElementValueById('phone-total');
    const caseTotalValue = getTextElementValueById('case-total');

    const currentSubTotal = phoneTotalValue + caseTotalValue;
    setTextElement('sub-total', currentSubTotal)

    const taxAmountValueString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmountValue =parseFloat(taxAmountValueString);

    setTextElement('tax-amount', taxAmountValue);


    const finalAmount = currentSubTotal + taxAmountValue;
    setTextElement('final-total', finalAmount);
}