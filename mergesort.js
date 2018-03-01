function mergeSort( arr ) {
  let splitArr = []
  arr.forEach( elem => splitArr.push([elem]))

  }
  // if ( arr.length === 1 || arr.length === 0 ) {
  //   return arr
  // } else if ( arr.length === 2 ) {
  //   if ( !compare( arr[0], arr[1] ) ) swap( arr, 0 )
  // } else {
  //   mergeSort( arr.slice( 0, Math.floor( arr.length / 2))
  // }
  // }

}
function compare(num1, num2) {
  return num1 < num2;
}

function swap(arr, index ) {
  let temp = arr[index];
  arr[index] = arr[index + 1];
  arr[index + 1] = temp;
}

function split( arr ) {
  let half = Math.floor(arr.length / 2)
  return [ arr.slice(0, half), arr.slice(half) ]
}

function merge ( arr1, arr2 ) {
  let result = []
      pointer1 = arr1.length - 1
      pointer2 = arr2.length - 1

  while ( pointer1 && pointer2 ) {
    if( arr1[pointer1] > arr2[pointer2] ) {
      result.unshift( arr1[pointer1] )
      pointer1--
    } else {
      result.unshift( arr2[pointer2] )
      pointer2--
    }
  }
  if ( pointer1 ) {
    result = arr1.concat( result )
  } else {
    result = arr2.concat( result )
  }
  return result

}

