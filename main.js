// Write your JavaScript here
// 

const totalAmountDue = document.getElementById('amount-due');
const totalAmountReceived = document.getElementById('amount-received');
const totalChange = document.getElementById('total-change')

function calculateChangeNeeded(due, received) {
    const amountDue = Number(due);
    const amountGiven = Number(received);
    const difference = amountGiven - amountDue;
    return Math.round(difference * 100);
    // console.log('running')
};

function handleClickEvent(e) {
    var amountDue = totalAmountDue.value;
    var amountReceived = totalAmountReceived.value;
    var result = calculateChangeNeeded(amountDue, amountReceived);
    var change = result / 100
    var dollarRemainder;
    var quarterRemainder;
    var dimeRemainder;
    var nickelRemainder;
    var pennyRemainder;
    // console.log(result / 100, 'result', typeof result)
    if (result % 100 === 0) {
        dollarRemainder = result / 100;
        quarterRemainder = 0;
        dimeRemainder = 0;
        nickelRemainder = 0;
        pennyRemainder = 0;
    } else {
        dollarRemainder = result / 100;
        quarterRemainder = (result % 100) / 25;
        dimeRemainder = ((result % 100) % 25) / 10;
        nickelRemainder = (((result % 100) % 25) % 10) / 5;
        pennyRemainder = ((((result % 100) % 25) % 10) % 5) / 1;
        // console.log(dollarRemainder, 'dollarRemainder in else')
    }
    //
    // var dollarRemainder = 
    // var quarterRemainder = result % .25;
    
    console.log(Math.floor(dollarRemainder), 'dollars', typeof dollarRemainder);
    console.log(Math.floor(quarterRemainder), 'quarters', typeof quarterRemainder);
    console.log(Math.floor(dimeRemainder), 'dimes', typeof dimeRemainder);
    console.log(Math.floor(nickelRemainder), 'nickels', typeof nickelRemainder);
    console.log(Math.floor(pennyRemainder), 'pennies', typeof pennyRemainder);
    
    totalChange.innerText = 'Change Due: $' + change;
    document.getElementById('dollars-output').innerText = Math.floor(dollarRemainder);
    document.getElementById('quarters-output').innerText = Math.floor(quarterRemainder);
    document.getElementById('dimes-output').innerText = Math.floor(dimeRemainder);
    document.getElementById('nickels-output').innerText = Math.floor(nickelRemainder);
    document.getElementById('pennies-output').innerText = Math.floor(pennyRemainder);
    //console.log(amountDue, 'amountDue', typeof amountDue)
    //console.log(amountReceived, 'amountReceived', typeof amountReceived)
};


/** TASKS
 * 1. restrict numbers inputed to two decimal points
 * 2
 */