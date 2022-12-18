let button = document.getElementById("button");
let email = document.getElementById("exampleInputEmail1");
let password = document.getElementById("exampleInputPassword1");
let btnDiv = document.getElementById("btn-submit");

window.addEventListener("DOMContentLoaded", function() {
  btnDiv.classList.add('btn-center');
}, false);

button.addEventListener("mouseenter", () => {
  if (email.value && password.value) {
    btnDiv.classList.remove('btn-right');
    btnDiv.classList.remove('btn-left');
    btnDiv.classList.add('btn-center');
    email.classList.remove('btn-outline-danger');
    password.classList.remove('btn-outline-danger');
  } else {
    let btnStyle = window.getComputedStyle(btnDiv);
    if(!email.value) {
      email.classList.add('btn-outline-danger');
    }
    if(!password.value) {
      password.classList.add('btn-outline-danger');
    }
    let centerMargin = btnStyle['textAlign'] == "center" ? true : false;
    let leftMargin = btnStyle['textAlign'] == "left" ? true : false;
    let rightMargin = btnStyle['textAlign'] == "right" ? true : false;
    if (centerMargin) {
      btnDiv.classList.remove('btn-center');
      btnDiv.classList.add('btn-left');
      centerMargin = !centerMargin;
    } else if (leftMargin) {
      btnDiv.classList.remove('btn-center');
      btnDiv.classList.remove('btn-left');
      btnDiv.classList.add('btn-right');
      leftMargin = !leftMargin;
    } else if (rightMargin) {
      btnDiv.classList.remove('btn-center');
      btnDiv.classList.remove('btn-right');
      btnDiv.classList.add('btn-left');
      rightMargin = !rightMargin;
    }
  }
});

email.addEventListener("mouseenter",() => {
  btnDiv.classList.remove('btn-right');
  btnDiv.classList.remove('btn-left');
  btnDiv.classList.add('btn-center');
  email.classList.remove('btn-outline-danger');
  password.classList.remove('btn-outline-danger');
});

password.addEventListener("mouseenter",() => {
  btnDiv.classList.remove('btn-right');
  btnDiv.classList.remove('btn-left');
  btnDiv.classList.add('btn-center');
  email.classList.remove('btn-outline-danger');
  password.classList.remove('btn-outline-danger');
});
