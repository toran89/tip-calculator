
const billInput = document.getElementById("bill-input");

const tipPercentage = document.getElementById("tip-box");

const calculateButton = document.getElementById("calculate-btn");

const getOutput = document.getElementById("output");

calculateButton.addEventListener('click', function(bill,tip){
  
  let billAmount = Number(billInput.value);
  let tipAmount = Number(tipPercentage.value);
  if (isNaN(billAmount) || isNaN(tipAmount)) {
    getOutput.innerHTML = `<strong style="color:red">Please Enter valid number</strong> `
    return;
  }
  
  let totalPercentage =  (tipAmount / 100)* billAmount;
  let total = totalPercentage + billAmount;
  getOutput.innerHTML = `Total is <strong>${total }</strong> `
})

