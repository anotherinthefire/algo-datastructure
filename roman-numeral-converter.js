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