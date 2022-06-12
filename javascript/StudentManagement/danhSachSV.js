function DanhSachSinhVien() {
  this.list = [];
  this.themSinhVien = function (sinhVien) {
    //su dung ham push de them sinh vien
    this.list.push(sinhVien);
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
  this.xoaSinhVien = function (id) {
    var index = this.timViTri(id);
    if (index !== -1) {
      this.list.splice(index, 1);
    }
  };
  this.layThongTinSinhVien = function (id) {
    //lay vi tri
    var index = this.timViTri(id);
    if (index !== -1) {
      return this.list[index];
    }
  };
  this.updateStudent = function (sinhVien) {
    var index = this.timViTri(sinhVien.id);
    if (index !== -1) {
      this.list[index] = sinhVien;
    }
  };
  this.timKiemSinhVien = function (keyword) {
    var mangTimKiem = [];

    for (var i = 0; i < this.list.length; i++) {
      if (
        this.list[i].name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
      ) {
        mangTimKiem.push(this.list[i]);
      }
    }
    return mangTimKiem;
  };
}
