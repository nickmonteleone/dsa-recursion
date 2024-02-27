/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr: number[], val: number, left = 0, right = arr.length): boolean {


  const middle = Math.floor((left + right) / 2);
  if (arr[middle] === val) return true;

  if (left === right) return false;


  if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle);
  }
  else {
    return binarySearch(arr, val, middle, right);
  }
}

export { binarySearch };