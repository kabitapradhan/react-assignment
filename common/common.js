function clickLogout(){
  localStorage.removeItem("user")
  document.location.href = "admin.html";
}