// @ts-nocheck
const getEles = (id) => document.getElementById(id);

const login = () => {
  // event.preventdefault()
  let userName = getEles("txtEmail").value;
  let userPass = getEles("txtPass").value;
  return axios({
    method: "POST",
    url: "http://svcy3.myclass.vn/api/Users/signin",
    data: {
      email: userName,
      password: userPass,
    },
  })
    .then(function (res) {
      // console.log(res);
      localStorage.setItem("LOGIN", JSON.stringify(res.data));
      window.location.assign("index.html");
    })
    .catch(function (err) {
      alertify.error("Email or Password is Invalid!");

      console.log(err);
    });
};
