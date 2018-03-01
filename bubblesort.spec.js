describe('Bubble Sort', function(){
  beforeEach( function() {
    spyOn(window, 'swap').and.callThrough()
    spyOn(window, 'compare').and.callThrough()
  })
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles a single-item array', function() {
    expect( bubbleSort( [1] ) ).toEqual( [1] )
  })

  it('handles a multiple-item array', function() {
    var arr = [ 4, 3, 1, 2, 3.14, -2]
    expect( bubbleSort( arr ) ).toEqual( arr.sort() )
  })

  it('sorting an array calls swap and compare the correct number of times', function() {
    var arr = [1,2,3,5,4]
    bubbleSort(arr)
    expect(swap.calls.count()).toEqual(1)
    expect(compare.calls.count()).toEqual(9)
  })

})
