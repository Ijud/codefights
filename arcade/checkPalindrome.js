function checkPalindrome(inputString) {
    if (inputString == inputString.split("").reverse().join("")){
     return true
    }else {
     return false
    }
   }
   