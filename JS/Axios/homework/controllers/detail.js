const getIDfromUrl = () => {
  // console.log(window.location.search.substr(1));
  return window.location.search.substr(1).split("=")[1];
};
const getDetalShoes = () => {
  return axios({
    method: "GET",
    url: "http://svcy3.myclass.vn/api/Product/getbyid?id=" + getIDfromUrl(),
  })
    .then(function (res) {
      console.log(res.data.content);
      getEle("TenSP").innerHTML = res.data.content.name;
      getEle("GiaSP").innerHTML = res.data.content.price.toLocaleString() + "$";
      getEle("moTaSP").innerHTML = res.data.content.description;
      getEle("HinhSP").setAttribute("src", res.data.content.image);
      // getEle("size").innerHTML = res.data.content.size
    })
    .catch(function (err) {
      console.log(err);
    });
};
getDetalShoes();

const getEle = (id) => document.getElementById(id);

// getEle("btnThemSP").addEventListener("click", function () {
//   document.getElementsByClassName("modal-title")[0].innerHTML =
//     "thêm sản phẩm ";
//   var footer =
//     '<button class="btn btn-success" onclick="addProduct()">add product</button>';

//   document.getElementsByClassName("modal-footer")[0].innerHTML = footer;
// });
const addProduct = () => {
  let quantityValue = getEle("quantity").value;
  if (quantityValue <= 0) {
    alertify.error("Please Fill Full Informations");
    return;
  }
  const orderDetail = [
    {
      productId: getIDfromUrl(),
      quantity: quantityValue,
    },
  ];
  return axios({
    method: "POST",
    url: "http://svcy3.myclass.vn/api/Users/order",
    data: orderDetail,
  })
    .then(function (res) {
      alertify.success("Add Successful");
    })
    .catch(function (err) {
      console.log(err);
    });
};
