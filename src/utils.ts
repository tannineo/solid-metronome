/**
 * calAvgInterval calculates average intervals in a given array of numbers
 * @param numbers an array of numbers
 * @returns the average interval, -1 when the given array is not sorted, or not enough elements (< 2)
 */
export const calAvgInterval = (numbers: number[]) => {
  if (numbers.length <= 1) {
    return -1
  }

  let sum = 0

  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] >= numbers[i + 1]) {
      return -1
    }

    sum += numbers[i + 1] - numbers[i]
  }

  return sum / (numbers.length - 1)
}
