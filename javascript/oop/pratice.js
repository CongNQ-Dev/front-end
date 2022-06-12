function getEle(id) {
  return document.getElementById(id);
}
getEle("txtShowInformation").addEventListener("click", function () {
  var studentIdValue = getEle("txtStudentId").value;
  //   console.log("Student Id: ", studentIdValue);
  var studentNameValue = getEle("txtStudentName").value;
  var studentTypeValue = getEle("txtStudentType").value;
  var studentMathValue = getEle("txtMath").value;
  var studentPhysicalValue = getEle("txtPhysical").value;
  // apply to OOP
  var Student = {
    //key:value
    id: studentIdValue,
    name: studentNameValue,
    type: studentTypeValue,
    math: studentMathValue,
    physical: studentPhysicalValue,
    calculate: function () {
      var average = (parseFloat(this.math) + parseFloat(this.physical)) / 2;
      return average;
    },
    classification: function (average) {
      if (average >= 8) {
        return "good";
      } else if (average >= 6 && average < 8) {
        return "Fairly Good";
      } else if (average == 5) {
        return "average";
      } else {
        return "Below Average";
      }
    },
  };

  getEle("spanStudentId").innerHTML = Student.id;
  getEle("spanStudentName").innerHTML = Student.name;
  getEle("spanStudentAverage").innerHTML = Student.calculate();
  getEle("spanStudentclassification").innerHTML = Student.classification(
    Student.calculate()
  );
});
