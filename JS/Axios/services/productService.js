//dung giao thuc axios de call api tu back end
function ProductService() {
  this.getListProduct = function () {
    return axios({
      url: "https://627bbd7fb54fe6ee008e18d6.mockapi.io/product",
      method: "GET",
      //giao thuc get giup chung ta lay du lieu tu api
    });
  };
  //add
  this.addListProductAPI = function (product) {
    return axios({
      url: "https://627bbd7fb54fe6ee008e18d6.mockapi.io/product",
      method: "POST",
      data: product,
    });
  };
}
