/** gatherStrings: given an object, return array of all the string values. */

function gatherStrings(obj: Record<string, any>): string[] {
  // base case where no keys left
  // loop through obj
  // if value is string
  // return [string + ...gatherString(obj - that key)]

  if (obj.keys.length === 0) return [];

  const valueToEvaluate = obj[obj.keys[0]]
  if (typeof valueToEvaluate === "string"){
    return [valueToEvaluate, ...gatherStrings(obj - valueToEvaluate)
  }

  return gatherStrings(obj - valueToEvaluate)
}

export { gatherStrings };
