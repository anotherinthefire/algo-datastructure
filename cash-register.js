function checkCashRegister(price, cash, cid) {
    const currencyUnits = {
      "PENNY": 0.01,
      "NICKEL": 0.05,
      "DIME": 0.1,
      "QUARTER": 0.25,
      "ONE": 1,
      "FIVE": 5,
      "TEN": 10,
      "TWENTY": 20,
      "ONE HUNDRED": 100
    };
  
    let change = [];
    let changeAmount = cash - price;
    let totalCID = cid.reduce((total, [, amount]) => total + amount, 0);
  
    if (changeAmount === totalCID) {
      return { status: "CLOSED", change: cid };
    } else if (changeAmount > totalCID) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  
    let updatedCID = [...cid]; //create new array with updated amount value
  
    for (let i = cid.length - 1; i >= 0; i--) {
      const [currency, amount] = cid[i];
      const currencyValue = currencyUnits[currency];
      let currencyAmount = 0;
  
      while (changeAmount >= currencyValue && updatedCID[i][1] > 0) {
        changeAmount -= currencyValue;
        updatedCID[i][1] -= currencyValue;
        currencyAmount += currencyValue;
        changeAmount = Math.round(changeAmount * 100) / 100;
      }
  
      if (currencyAmount > 0) {
        change.push([currency, currencyAmount]);
      }
    }
  
    if (changeAmount > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  
    return { status: "OPEN", change };
  }