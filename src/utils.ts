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

  return Math.floor(sum / numbers.length - 1)
}
