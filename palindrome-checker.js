function palindrome(str) {
    // remove non letters
    var alphanumericStr = str.replace(/[\W_]/g, '');

    //transform all in lowercase after removing the non letters
    var lowercaseStr = alphanumericStr.toLowerCase();

    //check if pag nireverse equal pa rin
    var reversedStr = lowercaseStr.split('').reverse().join('');
    return lowercaseStr === reversedStr;
}