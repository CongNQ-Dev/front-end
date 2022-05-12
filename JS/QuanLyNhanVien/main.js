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
  var ngaylam = getEle("ngayLam").value;
  var giolam = getEle("gioLam").value;
  var chucvu = getEle("chucvu").value;

  var nhanVien = new NhanVien(
    taikhoan,
    ten,
    email,
    password,
    ngaylam,
    giolam,
    chucvu
  );
  return nhanVien;
}

//call back function
getEle("btnThem").addEventListener("click", function () {
  getEle("btnThemNV").style.display = "inline-block";
});
//them nhan vien
getEle("btnThemNV").addEventListener("click", function () {
  var layDuLieuDauVaos = layDuLieuDauVao();
  if (layDuLieuDauVaos) {
    layDuLieuDauVaos.tinhLuong();
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
    var tagTD_Password = document.createElement("td");
    var tagTD_NgayLam = document.createElement("td");
    var tagTD_GioLam = document.createElement("td");
    var tagTD_ChucVu = document.createElement("td");
    var tagTD_Luong = document.createElement("td");
    var tagTD_Edit = document.createElement("td");
    var tagTD_Delete = document.createElement("td");

    //tao noi dung cho 7 cot va button
    tagTD_TK.innerHTML = arr[i].taikhoan;
    tagTD_TenNV.innerHTML = arr[i].ten;
    tagTD_Email.innerHTML = arr[i].email;
    //tagTD_Password.innerHTML = arr[i].password;
    tagTD_NgayLam.innerHTML = arr[i].ngaylam;
    tagTD_GioLam.innerHTML = arr[i].giolam;
    tagTD_ChucVu.innerHTML = arr[i].chucvu;
    tagTD_Luong.innerHTML = arr[i].luong;
    tagTD_Delete.innerHTML =
      '<button class="btn btn-warning" onclick="deleteNhanVien(\'' +
      arr[i].taikhoan +
      "')\">delete</button>";

    tagTD_Edit.innerHTML =
      '<button class="btn btn-success"  data-target="#myModal" data-toggle="modal"  onclick="editNhanVien(\'' +
      arr[i].taikhoan +
      "')\">Edit</button>";
    //appendchild 8 cot vao trong
    tagTr.appendChild(tagTD_TK);
    tagTr.appendChild(tagTD_TenNV);
    tagTr.appendChild(tagTD_Email);
    // tagTr.appendChild(tagTD_Password);
    tagTr.appendChild(tagTD_NgayLam);
    // tagTr.appendChild(tagTD_GioLam);
    tagTr.appendChild(tagTD_ChucVu);
    tagTr.appendChild(tagTD_Luong);
    tagTr.appendChild(tagTD_Delete);
    tagTr.appendChild(tagTD_Edit);
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
function deleteNhanVien(taikhoan) {
  dsnv.xoaNhanVien(taikhoan);
  taoBang(dsnv.list);
  setLocalStorage();
}
function editNhanVien(taikhoan) {
  var nhanVien = dsnv.layThongTinNhanVien(taikhoan);
  getEle("btnThemNV").style.display = "none";
  //dom toi cac the input show ra value
  getEle("tknv").value = nhanVien.taikhoan;
  getEle("name").value = nhanVien.ten;
  getEle("email").value = nhanVien.email;
  getEle("password").value = nhanVien.password;
  getEle("ngayLam").value = nhanVien.ngaylam;
  getEle("gioLam").value = nhanVien.giolam;
  getEle("chucvu").value = nhanVien.chucvu;
}
getEle("btnCapNhat").addEventListener("click", function (event) {
  event.preventDefault();
  var nhanVien = layDuLieuDauVao();
  if (nhanVien) {
    nhanVien.tinhLuong();
    dsnv.updateNhanVien(nhanVien);
    taoBang(dsnv.list);
    setLocalStorage();
  }
});
//tim kiem

getEle("btnTimNV").addEventListener("click", function () {
  var keyWord = getEle("searchName").value;
  var maTimKiem = dsnv.timKiemNhanVien(keyWord);
  taoBang(maTimKiem);
});
