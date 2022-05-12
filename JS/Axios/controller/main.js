var service = new ProductService();

function getEle(id) {
  return document.getElementById(id);
}
//lay du lieu tu be
function getData() {
  service
    .getListProduct()
    //thanh cong
    .then(function (result) {
      renderListProduct(result.data);
    })
    //that bai
    .catch(function (err) {
      console.log(err);
    });
}
getData();

function renderListProduct(list) {
  var content = "";
  for (var i = 0; i < list.length; i++) {
    //string template: do cua phien ban cua es6
    //va string template giup chung ta render ra chuoi html dong tohi giup chung ta
    //truyen gia tri vao the bang cu phap : ${}
    //
    content += `
    <tr>

    <td>${i + 1}</td>
    <td>${list[i].name}</td>
    <td>${list[i].price}</td>
    <td>${list[i].des}</td>
    <td>${list[i].image}</td>
    
    </tr>
    `;
  }
  getEle("tblListProduct").innerHTML = content;
}
getEle("btnAddProduct").addEventListener("click", function () {
  document.getElementsByClassName("modal-title")[0].innerHTML = "Add Product";
  var footer =
    '<button class="btn btn-success" onclick="addProduct()">Add Product</button> ';
  document.getElementsByClassName("modal-footer")[0].innerHTML = footer;
});

function addProduct() {
  var name = getEle("productName").value;
  var price = getEle("productPrice").value;
  var des = getEle("productDes").value;
  var img = getEle("productImage").value;

  var product = new Product("", name, price, img, des);

  service
    .addListProductAPI(product)
    .then(function (rs) {
      alert("add success");
      document.getElementsByClassName("close")[0].click();
      getData();
    })
    .catch(function (err) {
      console.log(err);
    });
}
