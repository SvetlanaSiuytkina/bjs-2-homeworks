"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let xOne;
  let xTwo;
  let d = (b ** 2) - 4 * a * c;

  if (d > 0) {
    xOne = (-b + Math.sqrt(d)) / (2 * a);
    xTwo = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(xOne, xTwo);
  } else if (d === 0) {
    xOne = -b / (2 * a);
    arr.push(xOne);
  }
  return arr;
}
console.log(solveEquation());

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthPercent = (percent / 100) / 12;
  let loanBody = amount - contribution;
  let monthPayment = loanBody * (monthPercent + (monthPercent / (((1 + monthPercent) ** countMonths) - 1)));
  let totalPayment = monthPayment * countMonths;
  let totalAmount = Number(totalPayment.toFixed(2));
  return totalAmount;
}
console.log(calculateTotalMortgage());