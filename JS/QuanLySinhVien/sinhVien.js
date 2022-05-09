function Sinhvien(
  id,
  name,
  email,
  password,
  yob,
  course,
  math,
  physical,
  chemical
) {
  //constructor
  //this.key= value -> cach khai bao thuoc tinh cua doi tuong trong function
  this.id = id;
  this.name = name;
  this.email = email;
  this.password = password;
  this.yob = yob;
  this.course = course;
  this.math = math;
  this.physical = physical;
  this.chemial = chemical;
  this.DTB = 0;
  this.tinhDiemTrungBinh = function () {
    this.DTB =
      (parseFloat(this.math) +
        parseFloat(this.physical) +
        parseFloat(this.chemial)) /
      3;
    return this.DTB;
  };
}
