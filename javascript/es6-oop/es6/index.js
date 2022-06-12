// console.log(a);
// const a= 1
// cơ chế hoistring khi nào biến được sinh ra thì mới sài được

// index_1 (123)

// function index_1 (a){
//     console.log(a);
// }

// spread operator: arr

// let arr_1 = [1,2,3]
// let arr_3 = [1,2,3]
// let arr_2 = [...arr_1,arr_3,4,5]
// console.log(arr_2);

// object
// let obj = {
//     name:"vuong",
//     age : 18,
//     des :"trăng sáng soi đêm rằm vương tròn tủi mười tám "
// }
// let obj2 = {  name:"cong",age:"18",...obj}
// // trung key se lay thằng cũ
// console.log(obj2);

// destructuring ( bóc tách dữ liệu)
// let arr = [ 'vương' , 15];

// let [ten , tuoi ] = arr
// console.log(ten,tuoi);

// let obj = {
//     user : "vuong",
//     lop : "web4"
// }

// let {user,lop} = obj

// console.log(user,lop);

/**
 * string template ${}
 */

// let usr = "vuong";
// let result = hello ${usr}
// console.log(result);
// var a = <h1>truong quang vuong</h1>
// var content = <h1>truong quang vuong </h1>
// var b = document.getElementById("tbd")
// b.innerHTML +=content
/**
 *
 */

/**
 *
 * object literal
 */
// let firstName = "truong";
// let lastName = "quang vuong"

// let objectUser = {
//     firstName, lastName
// }
// console.log(objectUser);

// for in , for of
let list = ["truong ", "quang", "vuong"];
// for (let i in list){
//     console.log(i);
// }
// for in giúp chúng ta lấy ra các vị trí trong mảng

// for of : lấy ra các giá trị trong mảng
// for (let i of list){
//     console.log(i);
// }

// list.forEach((item ,index) =>{
//     console.log(item,index);
// })

//  map :
//  ưu tiên dùng
// map và đống thời nó giúp chúng ta lấy ra các phần từ trong mảng

// list.map((item, key) =>{
//     console.log(item );
// })
