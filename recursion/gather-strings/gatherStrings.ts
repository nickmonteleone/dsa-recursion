/** gatherStrings: given an object, return array of all the string values. */

function gatherStrings(obj: Record<string, any>): string[] {
  // base case where no keys left
  // loop through obj
  // if value is string
  // return [string + ...gatherString(obj - that key)]

  if (obj.keys.length === 0) return [];

  const keyToEvaluate = obj.keys[0]
  const valueToEvaluate = obj[keyToEvaluate]
  if (typeof valueToEvaluate === "string"){
    delete obj.keyToEvaluate
    return [valueToEvaluate, ...gatherStrings(obj)]
  }

  return gatherStrings(obj)
}

export { gatherStrings };
