# algo-datastructure
JavaScript Algorithms and Data Structures Developer Certification, representing approximately 300 hours of coursework

### Palindrome Checker

- Return true if the given string is a palindrome. Otherwise, return false.

- A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
```
function palindrome(str) {

    // remove non letters
    var alphanumericStr = str.replace(/[\W_]/g, '');

    //transform all in lowercase after removing the non letters
    var lowercaseStr = alphanumericStr.toLowerCase();

    //check if pag nireverse equal pa rin
    var reversedStr = lowercaseStr.split('').reverse().join('');
    return lowercaseStr === reversedStr;
}
```

### Roman Numeral Converter
Convert the given number into a roman numeral.

| Roman numerals | Arabic numerals |
| ---------------| --------------- |
| M	| 1000 | 
| CM | 900
| D	| 500
| CD	| 400
| C	| 100
| XC	| 90
| L	| 50
| XL	| 40
| X	| 10
| IX	| 9
| V	| 5
| IV	| 4
| I	| 1

- All roman numerals answers should be provided in upper-case.

```
function convertToRoman(num) {
    var romanNumerals = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];

    var roman = '';

    for (var i = 0; i < romanNumerals.length; i++) {

        // check if num is greater than or equal to the current roman numeral value
        while (num >= romanNumerals[i].value) {

            // add the corresponding symbol to the roman string
            roman += romanNumerals[i].symbol;

            // minus the current roman numeral from num
            num -= romanNumerals[i].value;
        }
    }

    return roman;
}

console.log(convertToRoman(36));
```

### Caesars Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

- Write a function which takes a ROT13 encoded string as input and returns a decoded string.

- All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.



```
function rot13(str) {
  var decoded = '';

  for (var i = 0; i < str.length; i++) {
    var charCode = str.charCodeAt(i);

    // Check if A-Z
    if (charCode >= 65 && charCode <= 90) {
      // decode caesars cipher
      var decodedCharCode = ((charCode - 65 + 13) % 26) + 65;
      decoded += String.fromCharCode(decodedCharCode);
    } else {
      // non A-Z as is
      decoded += str[i];
    }
  }

  return decoded;
}

console.log(rot13("SERR PBQR PNZC"));
```

###
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

> 555-555-5555
> (555)555-5555
> (555) 555-5555
> 555 555 5555
> 5555555555
> 1 555 555 5555

For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

```
function telephoneCheck(str) {
    var pattern = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

    return pattern.test(str);
}

console.log(telephoneCheck("555-555-5555"));
```

- ^ and $ anchor the pattern
- (1\s?)? matches an optional country code "1" and an optional whitespace character.
- (\(\d{3}\)|\d{3}) matches either three digits enclosed in parentheses or three consecutive digits.
- [\s-]? matches an optional whitespace character or a hyphen.
- \d{3} matches three digits.
- [\s-]? matches an optional whitespace character or a hyphen.
- \d{4} matches four digits.

### Cash Register

- Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

- cid is a 2D array listing available currency.

- The checkCashRegister() function should always return an object with a status key and a change key.

- Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

- Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

- Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

```
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
```
