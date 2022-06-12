let student = {
  name: "vuong",
  classes: "web7",
  //   getStudentsInformation: function () {
  //     console.log(this);
  //   },
  getStudentsInformation: () => {
    console.log(this);
  },
};
student.getStudentsInformation();
