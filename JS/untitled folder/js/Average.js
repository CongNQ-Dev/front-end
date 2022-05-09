function Average() {
  let number1Value = document.querySelector("#number1").value * 1;
  let number2Value = document.querySelector("#number2").value * 1;
  let number3Value = document.querySelector("#number3").value * 1;
  let number4Value = document.querySelector("#number4").value * 1;
  let number5Value = document.querySelector("#number5").value * 1;
  let averageValue =
    (number1Value + number2Value + number3Value + number4Value + number5Value) /
    5;
  console.log("Average: ", averageValue);
  let result2 = (document.querySelector("#result2").innerHTML =
    "Average: " + averageValue);
}

function getEle(id) {
  return document.querySelector(id);
}
