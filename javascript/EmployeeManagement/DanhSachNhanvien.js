function DanhSachNhanVien() {
  this.list = [];
  this.themNhanVien = function (nhanVien) {
    //su dung ham push de them nhan vien
    this.list.push(nhanVien);
  };
  this.timViTri = function (taikhoan) {
    var index = -1;
    for (var i = 0; i < this.list.length; i++) {
      if (this.list[i].taikhoan == taikhoan) {
        index = i;
        break;
      }
    }
    return index;
  };
  this.xoaNhanVien = function (taikhoan) {
    var index = this.timViTri(taikhoan);
    if (index !== -1) {
      this.list.splice(index, 1);
    }
  };
  this.layThongTinNhanVien = function (taikhoan) {
    //lay vi tri
    var index = this.timViTri(taikhoan);
    if (index !== -1) {
      return this.list[index];
    }
  };
  this.updateNhanVien = function (nhanVien) {
    var index = this.timViTri(nhanVien.taikhoan);
    if (index !== -1) {
      this.list[index] = nhanVien;
    }
  };
  this.timKiemNhanVien = function (keyword) {
    var mangTimKiem = [];

    for (var i = 0; i < this.list.length; i++) {
      if (
        this.list[i].ten.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
      ) {
        mangTimKiem.push(this.list[i]);
      }
    }
    return mangTimKiem;
  };
}
