// function insert(num) {
//     document.form.textview.value = document.form.textview.value + num
// }
//
// function clean(){
//     document.form.textview.value = "";
// }
var crrncy = {'EUR': {'PLN': 4.15, 'USD': 0.83, 'GBP': 0.87}, 'USD': {'PLN': 3.45, 'EUR': 1.2, 'GBP': 0.76}, 'PLN' : {'EUR': 0.23, 'GBP': 0.20, 'USD': 0.26}};
var btn = document.querySelector('.button');
var baseCurrencyInput = document.getElementById('valuta-1');
var secondCurrencyInput = document.getElementById('valuta-2');
var amountInput = document.getElementById('bedrag');
var toShowAmount = document.querySelector('.gegeven-bedrag');
var toShowBase = document.querySelector('.valuta-1');
var toShowSecond = document.querySelector('.valuta-2');
var toShowResult = document.querySelector('.resultaat');

function convertCurrency(event) {
    event.preventDefault();
    var amount = amountInput.value;
    var from = baseCurrencyInput.value;
    var to = secondCurrencyInput.value;
    var result = 0;

    try{
        if (from === to){
            result = amount;
        } else {
            result = amount * crrncy[from][to];
        }
    }
    catch(err) {
        result = amount * (1 / crrncy[to][from]);
    }

    toShowAmount.innerHTML = amount;
    toShowBase.textContent = from + ' = ';
    toShowSecond.textContent = to;
    toShowResult.textContent = result;
}

btn.addEventListener('click', convertCurrency);

