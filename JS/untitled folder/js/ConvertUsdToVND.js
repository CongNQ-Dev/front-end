function ConvertUSDtoVND() {
  let usdValue = document.querySelector("#usdValue").value * 1;
  let valueOfOneUsdToVnd = 23500;
  let vndValue = usdValue * valueOfOneUsdToVnd;
  let result3 = (document.querySelector("#result3").innerHTML =
    "VND: " + vndValue);
}
