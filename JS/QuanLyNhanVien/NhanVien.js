function NhanVien(taikhoan, ten, email, ngaylam, chucvu) {
  this.taikhoan = taikhoan;
  this.ten = ten;
  this.email = email;
  this.ngaylam = ngaylam;
  this.chucvu = chucvu;
  this.luong = 0;
  this.tinhLuong = function () {
    this.luong = this.ngaylam * 300000;
    return this.luong;
  };
}
