/** find: return t/f is val is in arr. */

function find(arr: number[], val: number): boolean {
  if (arr.length === 0) return false;

  return arr[0] === val ? true : find(arr.slice(1), val)
}

export { find };