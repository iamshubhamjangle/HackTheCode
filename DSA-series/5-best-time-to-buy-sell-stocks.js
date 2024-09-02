var maxProfit = function (prices) {
  let profit = 0;
  let n = prices.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let diff = prices[j] - prices[i];
      profit = Math.max(profit, diff);
    }
  }

  return profit;
};

var maxProfit = function (prices) {
  let min = prices[0];
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else {
      let profit = prices[i] - min;
      maxProfit = Math.max(profit, maxProfit);
    }
  }

  return maxProfit;
};
