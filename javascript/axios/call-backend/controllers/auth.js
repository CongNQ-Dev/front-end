const checkAuthenTication = () => {
    let local = localStorage.getItem("LOGIN");
    let isLogin = window.location.pathname === "/views/login.html"
    /**
     * nếu íslogin === true thì đang ở login 
     * nguoc lại thì ở trang khác
     */
    if (local) {
        //  nếu ơ trang login thi đẩy sang trang chủ
        if (isLogin) {
            window.location.assign("index.html")
        }
        return
    }
    // nếu chưa đăng nhập
    !isLogin && window.location.assign("login.html")
}
checkAuthenTication()