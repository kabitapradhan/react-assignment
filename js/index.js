function clickToLogin(){
    console.log("This is login api call");
    clikToLoginModal();
}
function clikToLoginModal(){
    document.getElementById("userLoginModal").style.display = "block";
}
function submitLoginForm(e){
    var obj = {username : '' , password : ''}
    console.log("username :" , document.loginForm.username.value)
    obj.username = document.loginForm.username.value;
    obj.password = document.loginForm.password.value;
    console.log(loginAPI)
    const xhttp = new XMLHttpRequest();
    // xhttp.open("POST", "http://localhost:8080/api/auth/login");
    xhttp.open("POST", loginAPI);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify(obj));
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const objects = JSON.parse(this.responseText);
            console.log(objects);
            localStorage.setItem("user", JSON.stringify(objects.user));
            document.location.href = "admin.html";
        }
    };
    return false;
}
