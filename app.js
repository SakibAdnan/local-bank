const login = document.getElementById("login");
login.addEventListener("click", function(){
    const cardRapper = document.getElementById("card-rapper");
    const transectionArea = document.getElementById("transection-area");
    cardRapper.style.display = "none";
    transectionArea.style.display = "block";
});

const addDeposit = document.getElementById("addDeposit");
addDeposit.addEventListener("click", function(){
    const depositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmount);

    const currentDeposit = document.getElementById("currentDeposit").innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = depositNumber + currentDepositNumber;
    document.getElementById("currentDeposit").innerText = totalDeposit;

    const currentBalance = document.getElementById("currentBalance").innerText;
    const currentBalanceNumbeer = parseFloat(currentBalance);
    const totalBalance = depositNumber + currentBalanceNumbeer;
    document.getElementById("currentBalance").innerText = totalBalance;

    document.getElementById("depositAmount").value = "";
});

const addWithdraw = document.getElementById("addWithdraw");
addWithdraw.addEventListener("click", function(){
    const withdrawAmount = document.getElementById("withdrawAmount").value;
    const withdrawNumber = parseFloat(withdrawAmount);

    const currentwithdraw = document.getElementById("currentwithdraw").innerText;
    const currentWithdrawNumber = parseFloat(currentwithdraw);
    const totalWithdraw = withdrawNumber + currentWithdrawNumber;
    document.getElementById("currentwithdraw").innerText = totalWithdraw;

    const withdrawBalance = document.getElementById("currentBalance").innerText;
    const withdrowNum = parseFloat(withdrawBalance);
    const totalBalance = withdrowNum - withdrawNumber;
    document.getElementById("currentBalance").innerText = totalBalance;

    document.getElementById("withdrawAmount").value = "";
});
// function amountValue(id, depositNumber ){
//     const current = document.getElementById("id").innerText;
//     const currentNumbeer = parseFloat(current);
//     const totalBalance = depositNumber + currentNumbeer;
//     document.getElementById("id").innerText = totalBalance;
// }