// ke thua sinh vien
//new
var dssv = new DanhSachSinhVien();
var validation = new Validation();
function getEle(id) {
  return document.getElementById(id);
}

getLocalStorage();
function checkExistStudent(student) {
  if (student == null) {
    return false;
  } else {
    return true;
  }
}
function layDuLieuDauVao(isAdd) {
  var id = getEle("txtMaSV").value;
  var name = getEle("txtTenSV").value;
  var email = getEle("txtEmail").value;
  var pass = getEle("txtPass").value;
  var yob = getEle("txtNgaySinh").value;
  var course = getEle("khSV").value;
  var math = getEle("txtDiemToan").value;
  var physical = getEle("txtDiemLy").value;
  var chemical = getEle("txtDiemHoa").value;
  //isValid: la true => cho phep them sinh vien vao manager
  var isValid = false;
  //dong goi
  var checkEmpty = validation.checkEmpty(id, "err", "Your id is Empty");
  var checkEmail = validation.checkEmail(
    email,
    "errEmail",
    "Your email is Invalid"
  );
  // var checkName= validation.checkName(name,"")
  if (isAdd == false) {
    isValid = checkEmpty && checkEmail;
  }

  if (isValid) {
    var sinhVien = new Sinhvien(
      id,
      name,
      email,
      pass,
      yob,
      course,
      math,
      physical,
      chemical
    );
    return sinhVien;
  }
  return;
}
//call back function
getEle("btnAdd").addEventListener("click", function (event) {
  event.preventDefault();
  var dulieu = layDuLieuDauVao(false);
  if (dulieu) {
    dulieu.tinhDiemTrungBinh();
    dssv.themSinhVien(dulieu);
    // console.log(dssv.list);
    //console.log("sad: ", dulieu.tinhDiemTrungBinh());
    taoBang(dssv.list);
    setLocalStorage();
  }
});
function taoBang(arr) {
  getEle("tBodySinhVien").innerHTML = "";
  for (var i = 0; i < arr.length; i++) {
    //tao dong
    var tagTr = document.createElement("tr");

    //6 cot
    var tagTD_MSV = document.createElement("td");
    var tagTD_TenSV = document.createElement("td");
    var tagTD_Email = document.createElement("td");
    var tagTD_NgaySinh = document.createElement("td");
    var tagTD_KhoaHoc = document.createElement("td");
    var tagTD_DTB = document.createElement("td");
    var tagTD_Edit = document.createElement("td");
    var tagTD_Delete = document.createElement("td");
    //tao noi dung cho 6 cot
    tagTD_MSV.innerHTML = arr[i].id;
    tagTD_TenSV.innerHTML = arr[i].name;
    tagTD_Email.innerHTML = arr[i].email;
    tagTD_NgaySinh.innerHTML = arr[i].yob;
    tagTD_KhoaHoc.innerHTML = arr[i].course;
    tagTD_DTB.innerHTML = arr[i].DTB;
    tagTD_Delete.innerHTML =
      '<button class="btn btn-warning" onclick="deleteStudent(\'' +
      arr[i].id +
      "')\">delete</button>";
    tagTD_Edit.innerHTML =
      '<button class="btn btn-success" onclick="editStudent(\'' +
      arr[i].id +
      "')\">Edit</button>";
    //appendchild 8 cot vao trong
    tagTr.appendChild(tagTD_MSV);
    tagTr.appendChild(tagTD_TenSV);
    tagTr.appendChild(tagTD_Email);
    tagTr.appendChild(tagTD_NgaySinh);
    tagTr.appendChild(tagTD_KhoaHoc);
    tagTr.appendChild(tagTD_DTB);
    tagTr.appendChild(tagTD_Delete);
    tagTr.appendChild(tagTD_Edit);
    //show dong vao body
    getEle("tBodySinhVien").appendChild(tagTr);
  }
}

//reset Form
getEle("btnReset").addEventListener("click", function () {
  //Dom toiws casc ther input gasn value lại rỗng hết
  getEle("formSV").reset();
  getEle("btnUpdate").style.display = "none";
  getEle("txtMaSV").disabled = false;

  //Dom toi cac the div show ERR reset ban dau
});

function setLocalStorage() {
  var arrString = JSON.stringify(dssv.list);
  localStorage.setItem("DSSV", arrString);
}
function getLocalStorage() {
  //ep string thanh json
  if (localStorage.getItem("DSSV")) {
    var data = localStorage.getItem("DSSV");
    dssv.list = JSON.parse(data);
    taoBang(dssv.list);
  }
}
function deleteStudent(id) {
  dssv.xoaSinhVien(id);
  taoBang(dssv.list);
  setLocalStorage();
}
function editStudent(id) {
  var sinhVien = dssv.layThongTinSinhVien(id);
  getEle("btnUpdate").style.display = "inline-block";
  //dom toi cac the input show ra value

  getEle("txtMaSV").value = sinhVien.id;
  getEle("txtMaSV").disabled = true;
  getEle("txtTenSV").value = sinhVien.name;
  getEle("txtEmail").value = sinhVien.email;
  getEle("txtPass").value = sinhVien.password;
  getEle("txtNgaySinh").value = sinhVien.yob;
  getEle("khSV").value = sinhVien.course;
  getEle("txtDiemToan").value = sinhVien.math;
  getEle("txtDiemLy").value = sinhVien.physical;
  getEle("txtDiemHoa").value = sinhVien.chemical;
}
getEle("btnUpdate").addEventListener("click", function () {
  var sinhVien = layDuLieuDauVao();
  sinhVien.tinhDiemTrungBinh();
  dssv.updateStudent(sinhVien);
  taoBang(dssv.list);
  setLocalStorage();
});
//tim kiem

getEle("txtSearch").addEventListener("keyup", function () {
  var keyWord = getEle("txtSearch").value;
  var maTimKiem = dssv.timKiemSinhVien(keyWord);
  taoBang(maTimKiem);
});
