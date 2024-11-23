  // login button event hendler
  const Login = document.getElementById("Login");
  Login.addEventListener("click", function () {
    const LoginArea = document.getElementById("submit-area");
    LoginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
  });
  const Sine = document.getElementById("Sine");
  Sine.addEventListener("click", function () {
    const Sine = document.getElementById("submit-area");
    Sine.style.display = "none";
    const transactionArea = document.getElementById("SineIn");
    transactionArea.style.display = "block";
  });
  // sine in button event hendler
  const Signein = document.getElementById("Signein");
  Signein.addEventListener("click", function () {
    const Signein = document.getElementById("SineIn");
    Signein.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
  });
  // deposit button event hendlar

  const depositBtn = document.getElementById("addDeposit");
  depositBtn.addEventListener("click", function () {
    const depositNumber = getInputNumber("depositAmount");
    if (depositNumber < 0) {
      alert("Deposit number cannot be negtive");
    } else {
document.getElementById("depositAmount").value = "";
      updateSpanText("currentBalance", depositNumber);
      updateSpanText("currentDeposit", depositNumber);
    }
  });
  // withdrawBtn event hendler

  const withdrawBtn = document.getElementById("addWithdraw");
  withdrawBtn.addEventListener("click", function () {
    const withdrawNumber = getInputNumber("withdrawAmount");
    updateSpanText("currentWithdrew", withdrawNumber);
    updateSpanText("currentBalance", -1 * withdrawNumber);
    document.getElementById("withdrawAmount").value = "";
  });

  function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
  }

  function updateSpanText(id, addedNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = addedNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
  }