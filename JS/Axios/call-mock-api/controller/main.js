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
    <td>${list[i].description}</td>
    <td> <button class="btn btn-warning" onclick="deleteProduct(${
      list[i].id
    })">delete </button></td>
    <td><button class="btn btn-danger" id="btnEdit" data-toggle="modal" 
    data-target="#myModal" 
    onclick="editProduct(${list[i].id})">edit </button></td>
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
function deleteProduct(id) {
  service
    .deleteProductApi(id)
    .then(function () {
      // alert("delete success");
      getData();
    })
    .catch(function (err) {
      console.log(err);
    });
}
//lay thong tin san pham
function editProduct(id) {
  document.getElementsByClassName("modal-title")[0].innerHTML = "edit product ";
  var footer = `<button onclick="edit(${id})">edit</button>`;
  document.getElementsByClassName("modal-footer")[0].innerHTML = footer;
  service
    .getListProductIdAPI(id)
    .then(function (rs) {
      // console.log(rs.data);
      getEle("productName").value = rs.data.name;
      getEle("productPrice").value = rs.data.price;
      getEle("productImage").value = rs.data.image;
      getEle("productDes").value = rs.data.des;
    })
    .catch(function (err) {
      console.log(err);
    });
}
//cap nhap san pham

function edit(id) {
  var productNameValue = getEle("productName").value;
  var productPriceValue = getEle("productPrice").value;
  var productproductImageValue = getEle("productImage").value;
  var productDesValue = getEle("productDes").value;
  var product = new Product(
    id,
    productNameValue,
    productPriceValue,
    productproductImageValue,
    productDesValue
  );
  service
    .editProductAPI(product)
    .then(function (rs) {
      alert("edit success");
      document.getElementsByClassName("close")[0].click();
      getData();
    })
    .catch(function (err) {
      console.log(err);
    });
}
getEle("enter").addEventListener("click", function () {
  var idSearchValue = getEle("txtSearch").value;
  service
    .getListProductIdAPI(idSearchValue)
    .then(function (rs) {
      table(rs.data);
    })
    .catch(function (err) {
      console.log(err);
    });
});
function table(rs) {
  var content = "";

  content += `
          <tr>
              <td>${rs.id}</td>
              <td>${rs.name}</td>
              <td>${rs.price}</td>
              <td>${rs.img}</td>
              <td>${rs.description}</td>
              <td> <button class="btn btn-warning" onclick="deleteProduct(${rs.id})">delete </button></td>
              <td><button class="btn btn-danger" id="btnEdit" data-toggle="modal" 
              data-target="#myModal" 
              onclick="editProduct(${rs.id})">edit </button></td>
          </tr>
      
      `;

  getEle("tblListProduct").innerHTML = content;
}
