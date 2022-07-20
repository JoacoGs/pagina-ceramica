/* const username = document.getElementById("username");
const password = document.getElementById("password");
const button = document.getElementById("button");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const data = {
    username: username.value,
    password: password.value,
  };

  console.log(data);
});
 */

function signup(e) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const username = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  const user = {
    email: email,
    username: username,
    password: pass,
  };

  const json = JSON.stringify(user);
  localStorage.setItem(username, json);
  console.log("user added");
}

function loginFunc(e) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const result = document.getElementById("result");

  const user = localStorage.getItem(username);
  const data = JSON.parse(user);
  console.log(data);

  if (user == null) {
    result.innerHTML = "usuario incorrecto";
  } else if (username == data.username && pass == data.password) {
    result.innerHTML = "logueado";
  } else {
    result.innerHTML = "contraseña incorrecta";
  }
}
