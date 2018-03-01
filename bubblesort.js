function bubbleSort( arr ) {
  for (let k = arr.length - 1; k > 1; k--) {
    for (let i = 0; i < k; i++) {
      if (!compare(arr[i], arr[i + 1])) swap(arr, i);
    }
  }
  return arr;
}

function compare(num1, num2) {
  return num1 < num2;
}

function swap(arr, index ) {
  let temp = arr[index];
  arr[index] = arr[index + 1];
  arr[index + 1] = temp;
}

