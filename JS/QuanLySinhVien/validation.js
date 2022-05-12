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
}
