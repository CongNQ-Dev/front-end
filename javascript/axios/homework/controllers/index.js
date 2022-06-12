// let shoesList = [];
const getEle = (id) => document.getElementById(id);
let shoeList = [];

const getDataFromDB = () => {
  axios({
    method: "GET",
    url: `http://svcy3.myclass.vn/api/Product`,
  })
    .then(function (result) {
      //   console.log(result.data.content);
      createProductTable(result.data.content);
    })
    .catch(function (err) {
      console.log(err.error);
    });
};
getDataFromDB();
const getListProductByKeyword = (keyword) => {
  return axios({
    url: `http://svcy3.myclass.vn/api/Product/?keyword=${keyword}`,
    method: "GET",
  });
  // .then(function (result) {
  //   console.log(result.data.content);
  //   createProductTable(result.data.content);
  // })
  // .catch(function (err) {
  //   console.log(err.error);
  // });
};
const createProductTable = (list) => {
  let contentProductTableHTML = "";
  for (let i = 0; i < 8; i++) {
    let shoes = list[i];

    contentProductTableHTML += `
         <div id="card-component" class="card-space col-12 text-center col-md-3 demo">
             <div class="card style="width: 18rem;">
                 <img class="card-img-top" src=${shoes.image} alt="Card image cap">
                <div class="card-body">
                   <h6 class="card-title">${shoes.name}</h6>
                   <p class="card-text" >${shoes.description}</p>
                   <p class="card-text d-none" id="quantity" >${shoes.quantity}</p>
                   <a href="detail.html?id=${shoes.id}" class="btn btn-secondary">view</a>       
                  </div>
                   <div class="icon-heart">
                   <i class="fa fa-heart"></i>        
                   </div>
             </div>
         </div>
          `;
  }
  getEle("tblBody").innerHTML = contentProductTableHTML;
};

// const getAllProducts = () => {
//   axios({
//     method: "GET",
//     url: `http://svcy3.myclass.vn/api/Product/getAllCategory`,
//   })
//     .then(function (result) {
//       //   console.log(result.data.content);
//       createAllProductsTable(result.data.content);
//     })
//     .catch(function (err) {
//       console.log(err.error);
//     });
// };
// const createAllProductsTable = (list) => {
//   let contentProductTableHTML = "";
//   for (let i = 0; i < 12; i++) {
//     let shoes = list[i];

//     contentProductTableHTML += `
//          <div id="card-table" class="card-space col-12 text-center col-md-3 demo">
//              <div class="card style="width: 18rem;">
//                  <img class="card-img-top" src=${shoes.image} alt="Card image cap">
//                 <div class="card-body">
//                    <h6 class="card-title">${shoes.name}</h6>
//                    <p class="card-text" >${shoes.description}</p>
//                    <p class="card-text d-none" id="quantity" >${shoes.quantity}</p>
//                    <a href="detail.html?id=${shoes.id}" class="btn btn-secondary">view</a>
//                   </div>
//                    <div class="icon-heart">
//                    <i class="fa fa-heart"></i>
//                    </div>
//              </div>
//          </div>
//           `;
//   }
// };
getEle("search-btn").addEventListener("click", function () {
  var searchValue = getEle("search-input").value;

  getListProductByKeyword(searchValue)
    .then(function (result) {
      console.log(result.data.content);
      createProductTable(result.data.content);
      // window.scrollTo(0, $("#card-table"));
      let cardTableEles = getEle("card-component").scrollIntoView();
    })
    .catch(function (err) {
      console.log(err.error);
    });
});
let btnShoppingEles = document.getElementsByClassName("btn-shopping");
for (let i of btnShoppingEles) {
  i.addEventListener("click", function () {
    window.location.assign("category.html");
  });
}
