function Validation() {
  this.checkEmpty = function (input, divId, mess) {
    if (input.trim() === "") {
      getEle(divId).innerHTML = mess;
      getEle(divId).style.color = "red";
      return false;
    } else {
      getEle(divId).innerHTML = "";
      getEle(divId).className = "";
      return true;
    }
  };
  this.checkEmail = function (input, divId, mess) {
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (input.match(pattern)) {
      getEle(divId).innerHTML = "";
      getEle(divId).style.backgroundColor = "";
      return true;
    } else {
      getEle(divId).innerHTML = mess;
      getEle(divId).style.color = "red";
      return false;
    }
  };
  this.checkName = function (input, divId, mess) {
    var pattern =
      /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
    if (input.match(pattern)) {
      getEle(divId).innerHTML = "";
      getEle(divId).style.backgroundColor = "";
      return true;
    } else {
      getEle(divId).innerHTML = mess;
      getEle(divId).style.color = "red";
      return false;
    }
  };
  this.checkPassword = function (input, divId, mess) {
    var pattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$/;
    if (input.match(pattern)) {
      getEle(divId).innerHTML = "";
      getEle(divId).style.backgroundColor = "";
      return true;
    } else {
      getEle(divId).innerHTML = mess;
      getEle(divId).style.color = "red";
      return false;
    }
  };

  this.checkDateInThePast = function (input, divId, mess) {
    $("#datepicker")
      .datepicker()
      .change((evt) => {
        var input = $("#datepicker").datepicker("getDate");
        var now = new Date();
        now.setHours(0, 0, 0, 0);
        if (input < now) {
          getEle(divId).innerHTML = mess;
          getEle(divId).style.color = "red";
          return false;
        } else {
          getEle(divId).innerHTML = "";
          getEle(divId).style.backgroundColor = "";
          return true;
        }
      });
  };
  this.checkOffice = function (tagSelect, divId, mess) {
    if (tagSelect.selectedIndex == 0) {
      getEle(divId).innerHTML = mess;
      getEle(divId).style.color = "red";
      return false;
    } else {
      getEle(divId).innerHTML = "";
      getEle(divId).style.backgroundColor = "";
      return true;
    }
  };

  this.checkSumWorkDate = function (input, divId, mess) {
    var pattern = /^\d+$/;
    if (isNaN(input)) {
      getEle(divId).innerHTML = "";
      getEle(divId).style.backgroundColor = "";
      return true;
    } else {
      getEle(divId).innerHTML = mess;
      getEle(divId).style.color = "red";
      return false;
    }
  };

  this.checkSumWorkHour = function (input, divId, mess) {
    var pattern = /^\d+$/;

    if (!isNaN(input)) {
      getEle(divId).innerHTML = "";
      getEle(divId).style.backgroundColor = "";
      return true;
    } else {
      getEle(divId).innerHTML = mess;
      getEle(divId).style.color = "red";
      return false;
    }
  };
}
