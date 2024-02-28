/** gatherStrings: given an object, return array of all the string values. */

function gatherStrings(obj: Record<string, any>): string[] {
  let output: string[] = []

  for (const key in obj) {
    if (typeof obj[key] === "string") {
      output.push(obj[key]);
    }
    else if (typeof obj[key] === "object") {
      output = output.concat(gatherStrings(obj[key]))
    }
  }

  return output;
}

export { gatherStrings };
