/** gatherStrings: given an object, return array of all the string values. */

function gatherStrings(obj: Record<string, any>): string[] {
  let output: string[] = [];


  for (const key in obj) {
    const value = obj[key];
    if (typeof value === "string") {
      output.push(value);
    }
    else if (typeof value === "object") {
      // output = output.concat(gatherStrings(value));
      output.push(...gatherStrings(value))
    }
  }

  return output;
}

export { gatherStrings };
