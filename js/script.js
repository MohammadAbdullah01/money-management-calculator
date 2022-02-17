//function for catching input fields and get value;
function getMoney(itemId) {
    let item = document.getElementById(itemId);
    let itemCost = parseFloat(item.value);
    return itemCost;
}

//function for setting balance
function setMoney(id) {
    let currentId = document.getElementById(id);
    return currentId;
}

// click event on calculate button 
document.getElementById("calculate").addEventListener("click", function () {
    let totalIncome = getMoney("income");
    let totalExpenses = getMoney("food") + getMoney("rent") + getMoney("clothes");
    let balance = totalIncome - totalExpenses;
    let totalExpens = setMoney("total-expenses");
    let finalBalance = setMoney("balance");
    // error handling 
    if (totalIncome < 0 || getMoney("food") < 0 || getMoney("rent") < 0 || getMoney("clothes") < 0) {
        alert("cannot input negative number");
        return;
    }
    else if (isNaN(totalIncome) || isNaN(getMoney("food")) || isNaN(getMoney("rent")) || isNaN(getMoney("clothes"))) {
        alert("cannot input a string");
        return;
    }
    else if (totalExpenses > totalIncome) {
        alert("sorry! your expense is greater than your income.")
    }
    // final result 
    else {
        totalExpens.innerText = totalExpenses;
        finalBalance.innerText = balance;
    }
})

// click event on save button       
document.getElementById("save").addEventListener("click", function () {
    // saving amount calculate 
    let income = getMoney("income");
    let percentage = getMoney("percentage");
    let totalPercentage = (income * percentage) / 100;
    let savingAmount = setMoney("saving-amount");
    // remaining balance calculate 
    let remaining = setMoney("remaining-balance")
    let balance = parseFloat(setMoney("balance").innerText);
    let remainingBalance = balance - parseFloat(totalPercentage);
    //    error handling 
    if (totalPercentage > parseFloat(setMoney("balance").innerText)) {
        alert("sorry! your saving amount is greater than your balance.")
        return;
    }
    // final result 
    else {
        savingAmount.innerText = totalPercentage;
        remaining.innerText = remainingBalance;
    }
})



