function clickToLogin(){
    console.log("This is login api call");
    clikToLoginModal();
}
function clikToLoginModal(){
    document.getElementById("userLoginModal").style.display = "block";
}
function submitLoginForm(e){
    var obj = {username : '' , password : ''}
    
    var usnm = true;
    var pss = true;
    if(document.loginForm.username.value == ""){
        usnm = false;
        document.getElementById("username-error-span").style.display = "block";
    }
    if(document.loginForm.password.value == ""){
        pss = false;
        document.getElementById("password-error-span").style.display = "block";
    } 
    console.log("username :" , document.loginForm.username.value)
    console.log("pass :" , document.loginForm.password.value)
    if(usnm == false || pss == false){
        return false;
    } else {
        obj.username = document.loginForm.username.value;
        obj.password = document.loginForm.password.value;
        getJJsp("POST" , loginAPI , JSON.stringify(obj) , loginCallback);
        return false;
        // const xhttp = new XMLHttpRequest();
        // xhttp.open("POST", loginAPI);
        // xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        // xhttp.send(JSON.stringify(obj));
        // xhttp.onreadystatechange = function () {
        //     if (this.readyState == 4 && this.status == 200) {
        //         const objects = JSON.parse(this.responseText);
        //         console.log(objects);
        //         localStorage.setItem("user", JSON.stringify(objects.user));
        //         // document.location.href = "admin.html";
        //     }
        // };
    }
    
}
function loginCallback(){
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        const objects = JSON.parse(xhttp.responseText);
        console.log(objects);
        if(objects.user){
            localStorage.setItem("user", JSON.stringify(objects.user));
            document.location.href = "admin.html";
        } else {
            document.getElementById('login-whole-error').style.display = "block"
        }
        
    }
}
function allPostsApix(){
    getJJsp('GET',allPostsApi , null , callbackGetPost)
}
function callbackGetPost(){
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        let objects = JSON.parse(this.responseText);
        // console.log(objects)
        if(objects.length > 0){
            document.getElementById("marquee-post-container").style.display = "block";
            var text = "";
            for(var i=0;i<objects.length;i++){
                console.log(objects[i].content);
                text += "Latest: " + objects[i].content + " . ";
            }
            document.getElementById('marquee-post-text').innerText = text;
        } else {
            document.getElementById("marquee-post-container").style.display = "none";
        }
    }
}