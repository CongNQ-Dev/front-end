function SumOfDigits() {
  let numberToCalculateDigitsValue =
    document.querySelector("#numberToCalculateDigits").value * 1;
  let a = 0;
  let sumOfDigits = 0;
  while (numberToCalculateDigitsValue != 0) {
    a = numberToCalculateDigitsValue % 10;
    sumOfDigits += a;
    numberToCalculateDigitsValue = Math.floor(
      numberToCalculateDigitsValue / 10
    );
  }
  let result4 = (document.querySelector("#result4").innerHTML =
    "Sum of Digits: " + sumOfDigits);
}
