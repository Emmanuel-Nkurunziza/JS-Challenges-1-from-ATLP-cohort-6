// Palindrome Checker
// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward 
// and backward, ignoring punctuation, case, and spacing.

// Note: You'll need to remove all non-alphanumeric characters (punctuation, 
// spaces and symbols) and turn everything into the same case (lower or upper case) 
// in order to check for palindromes.


function palindrome(str) {
  // Step 1. The first part is the same as earlier
  var re = /[^A-Za-z0-9]/g; // or var re = /[\W_]/g;
  str = str.toLowerCase().replace(re, '');
 
  // Step 2. Create the FOR loop
  var len = str.length; // var len = "A man, a plan, a canal. Panama".length = 30
  
  for (var i = 0; i < len/2; i++) {
    if (str[i] !== str[len - 1 - i]) { // As long as the characters from each part match, the FOR loop will go on
        return console.log(`The string is not a palindrome `); // When the characters don't match anymore, false is returned and we exit the FOR loop
    }

  }
  return console.log(`The string IS a palindrome `); // Both parts are strictly equal, it returns true => The string is a palindrome
 }
 
 palindrome("A man, a plan, a canal. Panama");