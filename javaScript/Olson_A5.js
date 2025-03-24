function isPalindrome(str) {
    const cleanedStr = str.replace(/\s+/g, '').toLowerCase();
    // remove spaces and convert to lowercase

    const reversedStr = cleanedStr.split('').reverse().join('');
    // reverse the string
    
    return cleanedStr === reversedStr;
    // check if the original and reversed strings are the same
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("A man a plan a canal Panama"));
// example usage