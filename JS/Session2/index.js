// function demo() {
//   var a = parseInt(document.getElementById("num1").value);
//   var b = parseInt(document.getElementById("num2").value);
//   console.log(a);
//   console.log(b);
//   sum = a + b;
//   document.getElementById("result").innerHTML = sum;
// }
// function turnOff() {
//   getEle("buld").src = "https://www.w3schools.com/html/pic_bulboff.gif";
//   getEle("onBtn").disable = true;
// }
// function turnOn() {
//   getEle("buld").src = "https://www.w3schools.com/html/pic_bulbon.gif";
//   getEle("offBtn").disable = true;
// }
function tinhTien() {
  event.preventDefault();
  var tienDaSDValue = parseInt(getEle("txtTienDaSD").value);
  var tienDaTra = parseInt(getEle("txtTienDaTra").value);
  console.log(tienDaSDValue);
  console.log(tienDaTra);
}
function tinhTienSP() {
  event.preventDefault();
  var tenSPValue = getEle("tenSP").value;
  var soluongValue = parseInt(getEle("soLuong").value);
  var dongiaValue = parseInt(getEle("donGia").value);
  var tienSanPham = soluongValue * dongiaValue;
  getEle("thongBao").innerHTML =
    "(ﾐ꒡ᆽ꒡ﾐ) Ten San Pham: " +
    tenSPValue +
    "<br/>" +
    "Tien San Pham: " +
    tienSanPham;
}
