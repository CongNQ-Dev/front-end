// var shoesList = [];

// function getDataFromDB (){
//     return axios({

//     })
// }
let shoesList = [];

const getDataFromDB = () => {
  // @ts-ignore
  axios({
    method: "GET",
    url: "http://svcy3.myclass.vn/api/Product",
  })
    .then(function (res) {
      //console.log(res.data.content);
      // code thành công.
      createTable(res.data.content);
    })
    .catch(function (err) {
      // code thất bại mỗi backend có một kiểu trả lôi khác nhau
      console.log(err.error);
    });
};
getDataFromDB();

const getEle = (id) => document.getElementById(id);

function createTable(list) {
  let content = "";
  for (let i = 0; i < 8; i++) {
    let shoes = list[i];
    content += `
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src=${shoes.image} alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${shoes.name}</h5>
            <p class="card-text" >${shoes.description}</p>
            <p class="card-text" id="quantity" >${shoes.quantity}</p>
            <a href="detail.html?id=${shoes.id}" class="btn btn-primary">Detail</a>
            
          </div>
      </div>
        `;
  }
  getEle("tblBody").innerHTML = content;
}
const buyShoes = (id) => {
  let quantityValue = getEle("quantity");
};
