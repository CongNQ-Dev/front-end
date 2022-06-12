const checkAuthenTication = () => {
  let local = localStorage.getItem("LOGIN");
  let isLogin = window.location.pathname === "/views/login.html";

  if (local) {
    if (isLogin) {
      window.location.assign("index.html");
    }
    return;
  }

  !isLogin && window.location.assign("login.html");
};
checkAuthenTication();
