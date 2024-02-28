import { LLNodeStr } from "../common/ll";

/** longest: return length of longest word in a linked list of words. */

function longest(words: LLNodeStr | null): number {
  if (words === null) {
    return 0;
  }

  const currentLength = words.val.length;
  const longestRemaining = longest(words.next);

  return currentLength > longestRemaining ? currentLength : longestRemaining;
  // return Math.max(currentLength, longestRemaining)
}

export { longest };
