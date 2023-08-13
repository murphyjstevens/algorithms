import bubbleSort from '@algorithms/bubble-sort'

describe('bubble-sort', () => {
  test('can sort array', () => {
    const array: number[] = [22, 3, 42, 9, 10, 333, 2]
    bubbleSort(array)
    expect(array).toEqual([2, 3, 9, 10, 22, 42, 333])
  })

  test('can handle empty array', () => {
    const array: number[] = []
    bubbleSort(array)
    expect(array).toEqual([])
  })
})
