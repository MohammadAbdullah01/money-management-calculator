// set balance 
function setMoney(id) {
    let currentId = document.getElementById(id);
    return currentId;
}
// catch input fields and get value;
function getMoney(itemId) {
    let item = document.getElementById(itemId);
    let itemCost = parseFloat(item.value);
    return itemCost;
}
document.getElementById("calculate").addEventListener("click", function () {

    let totalIncome = getMoney("income");
    let totalExpenses = getMoney("food") + getMoney("rent") + getMoney("clothes");
    let balance = totalIncome - totalExpenses;
    let totalExpens = setMoney("total-expenses");
    let finalBalance = setMoney("balance");

    if (totalIncome < 0 || getMoney("food") < 0 || getMoney("rent") < 0 || getMoney("clothes") < 0) {
        alert("cannot input negative number");
        return;
    }
    else if (isNaN(totalIncome) || isNaN(getMoney("food")) || isNaN(getMoney("rent")) || isNaN(getMoney("clothes"))) {
        alert("cannot input a string");
        return;
    }
    else {
        totalExpens.innerText = totalExpenses;
        finalBalance.innerText = balance;
    }
})



