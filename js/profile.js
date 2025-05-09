    const userJSON = localStorage.getItem("user");
    const user = JSON.parse(userJSON);
    console.log(user);
    const registeredUserName=user.userName;
    console.log(registeredUserName);
    const registeredEmail=user.email;
    console.log(registeredEmail);
    

document.getElementById('profileUserName').textContent=`${registeredUserName}`;
document.getElementById('profileUserEmail').textContent=registeredEmail;

const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  window.location.href = "game.html";
});