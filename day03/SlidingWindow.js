function maxSteps(steps, k) {
  let windowSum = 0;
  let maxSum = 0;

  // First window
  for (let i = 0; i < k; i++) {
    windowSum += steps[i];
  }

  maxSum = windowSum;

  // Slide window
  for (let i = k; i < steps.length; i++) {
    windowSum = windowSum - steps[i - k] + steps[i];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

const steps = [4000, 6000, 3000, 5000, 7000, 2000, 8000];

console.log("Max 3-day steps:", maxSteps(steps, 3));
