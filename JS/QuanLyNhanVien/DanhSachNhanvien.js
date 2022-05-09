function DanhSachNhanVien() {
  this.list = [];
  this.themNhanVien = function (nhanVien) {
    //su dung ham push de them nhan vien
    this.list.push(nhanVien);
  };
  this.timViTri = function (id) {
    var index = -1;
    for (var i = 0; i < this.list.length; i++) {
      if (this.list[i].id == id) {
        index = i;
        break;
      }
    }
    return index;
  };
  this.xoaNhanVien = function (id) {
    var index = this.timViTri(id);
    if (index !== -1) {
      this.list.splice(index, 1);
    }
  };
  this.layThongTinNhanVien = function (id) {
    //lay vi tri
    var index = this.timViTri(id);
    if (index !== -1) {
      return this.list[index];
    }
  };
  this.updateNhanVien = function (nhanVien) {
    var index = this.timViTri(nhanVien.id);
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
