// Palindrome Checker
// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward 
// and backward, ignoring punctuation, case, and spacing.

// Note: You'll need to remove all non-alphanumeric characters (punctuation, 
// spaces and symbols) and turn everything into the same case (lower or upper case) 
// in order to check for palindromes.

function palindrome(str) {
    let refinedStr = str.replace(/\W+|_/g, "").toLowerCase();//all non-word characters and underscrollrs are replaced by ""  and all put to Lowwer case
    let reversedStr = refinedStr.split("").reverse().join('');
    console.log(reversedStr, refinedStr);
    if (reversedStr !== refinedStr) {
       return false;
    } else {
      return true
    }
   
}
  
let result = palindrome("A man, a plan, a canal. Panama");
console.log(result)