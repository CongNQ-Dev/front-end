function NhanVien(taikhoan, ten, email, password, ngaylam, giolam, chucvu) {
  this.taikhoan = taikhoan;
  this.ten = ten;
  this.email = email;
  this.password = password;
  this.ngaylam = ngaylam;
  this.giolam = giolam;
  this.chucvu = chucvu;
  this.luong = 0;
  this.tinhLuong = function () {
    this.luong =
      parseFloat(parseFloat(this.giolam) * parseFloat(this.ngaylam)) * 300000;
    return this.luong;
  };
}
