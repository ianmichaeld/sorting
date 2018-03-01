function mergeSort( arr ) {
  let initArray = [ arr ]
  for ( i=0 ; i < arr.length ; i++ ) {
      if ( initArray[i].length > 1 ) {
        let spl = split(initArray[i])
        initArray.splice( i, 1, spl[0], spl[1] )
      }
      console.log(initArray)
  }
  return initArray
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

