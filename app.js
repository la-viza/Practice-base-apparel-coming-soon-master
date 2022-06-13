let form = document.getElementById("form");
let email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let emailValue = email.value;

  if (!validateEmail(emailValue)) {
    form.classList.add("error");
  } else {
    form.classList.remove("error");
    document.body.innerHTML = `<div style="display:flex; align-items: center; justify-content: center; color:hsl(0, 93%, 68%); margin-top:17rem;
"><h1>Thank you!</h1></div>`;
  }
});

function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
} 
