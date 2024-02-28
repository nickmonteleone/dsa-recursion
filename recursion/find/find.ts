/** find: return t/f is val is in arr. */

function find(arr: number[], val: number): boolean {
  if (arr.length === 0) return false; // first base case

  if (arr[0] === val){ // second base case
    return true
  }

  return find(arr.slice(1),val)
  // return arr[0] === val ? true : find(arr.slice(1), val)
}

export { find };