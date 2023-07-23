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
            document.location.href = "posts.html";
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
function submitEnquiryForm(){
    console.log("submitEnquiryForm calling")
    // enquiryForm
    var obj = {name : '' , phone : '',email : '' , message : ''}
    var nm = true;
    var phn = true;
    var eml = true;
    var msg = true;
    if(document.enquiryForm.name.value == ""){
        nm = false;
        //document.getElementById("cname-error-span").style.display = "block";
    }
    if(document.enquiryForm.phone.value == ""){
        phn = false;
        //document.getElementById("cphone-error-span").style.display = "block";
    } 
    if(document.enquiryForm.email.value == ""){
        eml = false;
        //document.getElementById("cemail-error-span").style.display = "block";
    }
    if(document.enquiryForm.message.value == ""){
        msg = false;
        //document.getElementById("cmessage-error-span").style.display = "block";
    } 
    if(nm == false || phn == false || eml == false || msg == false){
        console.log("hhhhhhhh")
        
    } else {
        console.log("ffffff")
        obj.name = document.enquiryForm.name.value;
        obj.phone = document.enquiryForm.phone.value;
        obj.email = document.enquiryForm.email.value;
        obj.message = document.enquiryForm.message.value;
        //console.log(obj)
        getJJsp("POST" , RegisterContactApi , JSON.stringify(obj) , contactCallback);
        
    }
}
function contactCallback(){
    console.log("contactCallback")
    console.log(xhttp.readyState)
    console.log(xhttp.status)
    if (xhttp.readyState == 4 && (xhttp.status == 200 || xhttp.status == 201)  ) {
        let objects = JSON.parse(this.responseText);
        console.log(objects);
        console.log(objects.email);
        if(objects.email){
            console.log("comming")
            document.enquiryForm.name.value = "";
            document.enquiryForm.phone.value = "";
            document.enquiryForm.email.value = "";
            document.enquiryForm.message.value = "";
            document.getElementById('contact-succuss-modal').style.display = "block";
            setTimeout(closeContactEnquiryModal, 5000);
        }
    }
}
function closeContactEnquiryModal(){
    console.log("closeContactEnquiryModal call")
    document.getElementById('contact-succuss-modal').style.display = "none";
}
function closeLoginModal(){
    document.getElementById("userLoginModal").style.display = "none";
}