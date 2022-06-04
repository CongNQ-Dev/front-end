let shoesList = [];
const getEle = (id) => document.getElementById(id);
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
const createProductTable = (list) => {
  let contentProductTableHTML = "";
  for (let i = 0; i < 8; i++) {
    let shoes = list[i];
    contentProductTableHTML += `
         <div class="card-space col-12 text-center col-md-3 demo">
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
const buyShoes = (id) => {
  let quantityValue = getEle("quantity");
};
