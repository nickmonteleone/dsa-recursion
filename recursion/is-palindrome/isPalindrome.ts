/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str: string): boolean {
  if (str.length <= 1) return true; // first base case

  const sameLetter = str[0] === str[str.length -1]

  if (!sameLetter){ // second base case
    return false
  }

  return isPalindrome(str.slice(1, str.length -1))
}

export { isPalindrome };