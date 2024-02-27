/** findIndex: return index of val in arr (or -1 if val is not present). */

function findIndex(arr: number[], val: number): number {

  function _valCheck(arr: number[], i: number):number {
    if (arr.length === i) return -1;
    if (arr[i] === val) return i;

    return _valCheck(arr, i + 1);
  }

  return _valCheck(arr, 0);
}

export { findIndex };