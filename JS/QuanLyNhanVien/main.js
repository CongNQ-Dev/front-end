// ke thua sinh vien
//new
function getEle(id) {
  return document.getElementById(id);
}
var dsnv = new DanhSachNhanVien();
getLocalStorage();
function layDuLieuDauVao() {
  var taikhoan = getEle("tknv").value;
  var ten = getEle("name").value;
  var email = getEle("email").value;
  var password = getEle("password").value;
  var ngaylam = getEle("datepicker").value;
  var chucvu = getEle("chucvu").value;

  var nhanVien = new NhanVien(taikhoan, ten, email, ngaylam, chucvu);

  return NhanVien;
}

//call back function
getEle("btnThemNV").addEventListener("click", function () {
  var layDuLieuDauVaos = layDuLieuDauVao();
  if (layDuLieuDauVaos) {
    // layDuLieuDauVaos.tinhLuong();
    dsnv.themNhanVien(layDuLieuDauVaos);
    taoBang(dsnv.list);
    setLocalStorage();
  }
});
function taoBang(arr) {
  getEle("tableDanhSach").innerHTML = "";
  for (var i = 0; i < arr.length; i++) {
    //tao dong
    var tagTr = document.createElement("tr");

    //6 cot
    var tagTD_TK = document.createElement("td");
    var tagTD_TenNV = document.createElement("td");
    var tagTD_Email = document.createElement("td");
    var tagTD_NgayLam = document.createElement("td");
    var tagTD_ChucVu = document.createElement("td");
    var tagTD_Luong = document.createElement("td");
    var tagTD_Edit = document.createElement("td");
    var tagTD_Delete = document.createElement("td");
    //tao noi dung cho 6 cot
    tagTD_TK.innerHTML = arr[i].taikhoan;
    tagTD_TenNV.innerHTML = arr[i].ten;
    tagTD_Email.innerHTML = arr[i].email;
    tagTD_NgayLam.innerHTML = arr[i].ngaylam;
    tagTD_ChucVu.innerHTML = arr[i].chucvu;
    tagTD_Luong.innerHTML = arr[i].luong;
    // tagTD_Delete.innerHTML =
    //   '<button class="btn btn-warning" onclick="deleteStudent(\'' +
    //   arr[i].id +
    //   "')\">delete</button>";
    // tagTD_Edit.innerHTML =
    //   '<button class="btn btn-success" onclick="editStudent(\'' +
    //   arr[i].id +
    //   "')\">Edit</button>";
    //appendchild 8 cot vao trong
    tagTr.appendChild(tagTD_TK);
    tagTr.appendChild(tagTD_TenNV);
    tagTr.appendChild(tagTD_Email);
    tagTr.appendChild(tagTD_NgayLam);
    tagTr.appendChild(tagTD_ChucVu);
    tagTr.appendChild(tagTD_Luong);
    // tagTr.appendChild(tagTD_Delete);
    // tagTr.appendChild(tagTD_Edit);
    //show dong vao body
    getEle("tableDanhSach").appendChild(tagTr);
  }
}

function setLocalStorage() {
  var arrString = JSON.stringify(dsnv.list);
  localStorage.setItem("dsnv", arrString);
}
function getLocalStorage() {
  //ep string thanh json
  if (localStorage.getItem("dsnv")) {
    var data = localStorage.getItem("dsnv");
    dsnv.list = JSON.parse(data);
    taoBang(dsnv.list);
  }
}
// function deleteNhanVien(id) {
//   dsnv.xoaNhanVien(id);
//   taoBang(dsnv.list);
//   setLocalStorage();
// }
// function editNhanVien(id) {
//   var nhanVien = dsnv.layThongTinNhanVien(id);
//   getEle("btnUpdate").style.display = "inline-block";
//   //dom toi cac the input show ra value

//   getEle("txtMaNV").value = nhanVien.id;
//   getEle("txtMaNV").disabled = true;
//   getEle("txtTenSV").value = NhanVien.name;
//   getEle("txtEmail").value = NhanVien.email;
//   getEle("txtPass").value = NhanVien.password;
//   getEle("txtNgaySinh").value = NhanVien.yob;
//   getEle("khSV").value = NhanVien.course;
//   getEle("txtDiemToan").value = NhanVien.math;
//   getEle("txtDiemLy").value = NhanVien.physical;
//   getEle("txtDiemHoa").value = NhanVien.chemical;
// }
// getEle("btnUpdate").addEventListener("click", function () {
//   var NhanVien = layDuLieuDauVao();
//   NhanVien.tinhDiemTrungBinh();
//   dsnv.updateStudent(NhanVien);
//   taoBang(dsnv.list);
//   setLocalStorage();
// });
//tim kiem

// getEle("txtSearch").addEventListener("keyup", function () {
//   var keyWord = getEle("txtSearch").value;
//   var maTimKiem = dsnv.timKiemNhanVien(keyWord);
//   taoBang(maTimKiem);
// });
