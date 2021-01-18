// Two sum

function twoSums(number, target) {
  let left = 0;
  let right = number.length - 1;

  while (left < right) {
    let sum = number[left] + number[right];

    if (sum === target) {
      return `Adding these Numbers will result to the target number ----> ${number[left]} ${number[right]}`;
    } else if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    }
  }

  return [`Adding these Numbers doesn't give target result`];
}

console.log(twoSums([2, 7, 11, 15], 26)); // out put is 11 and 15
console.log(twoSums([2, 7, 11, 15], 18)); // out put is 7 and 2
console.log(twoSums([2, 7, 11, 15], 206)); // out put is [`Adding these Numbers doesn't give target result`]
