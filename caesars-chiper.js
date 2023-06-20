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