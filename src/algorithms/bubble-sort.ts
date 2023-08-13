// Time Complexity is O(n^2)
export default function bubbleSort(array: number[]): number[] {
  for (let i: number = array.length - 1; i > 0; i--) {
    for (let j: number = 0; j < i; j++) {
      if (array[j] > array[j+1]) {
        const value = array[j]
        array[j] = array[j+1]
        array[j+1] = value
      }
    }
  }
  return array
}

