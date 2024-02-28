/** findIndex: return index of val in arr (or -1 if val is not present). */

function findIndex(arr: number[], val: number): number {
  if (arr.length === 0) return -1;
  if (arr[0] === val) return 0;

  const indexOnRest = findIndex(arr.slice(1), val)

  return (indexOnRest === -1) ? -1 : 1 + indexOnRest
}


export { findIndex };

// function findIndex(arr: number[], val: number, idx: number = 0): number {

//   if (arr.length === idx) return -1;
//   if (arr[idx] === val) return idx;

//   return findIndex(arr, val, idx + 1);
// }