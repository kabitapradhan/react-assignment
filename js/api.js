var xhttp ;
var loginAPI = "https://spring-assignment-production.up.railway.app/api/auth/login";
var getAllPostListApi = "https://spring-assignment-production.up.railway.app/api/v1/post/";
var editPostApi = "https://spring-assignment-production.up.railway.app/api/v1/post/";
var addPostApi = "https://spring-assignment-production.up.railway.app/api/v1/post/";
var deletePostApi = "https://spring-assignment-production.up.railway.app/api/v1/post/";
var allPostsApi = "https://spring-assignment-production.up.railway.app/api/v1/post/user/1";

var allContactApi = "https://spring-assignment-production.up.railway.app/api/v1/contacts/";
var RegisterContactApi = "https://spring-assignment-production.up.railway.app/api/v1/contacts/";
var deleteContactApi = "https://spring-assignment-production.up.railway.app/api/v1/contacts/"
// getJSON(post,loginAPI, "id=xxx&p1=yyy", callbcak funxtion);
// function getJJsp(method ,path, params, callback) {
// 	var ts = new Date().getTime();	
// 	if(window.XMLHttpRequest){ // For Mozilla, Safari, ...
// 		jsonHttp = new XMLHttpRequest();
// 	}
// 	else if(window.ActiveXObject){ // For Internet Explorer
// 		jsonHttp = new ActiveXObject("Microsoft.XMLHTTP");
// 	}
// 	var lnk = path
// 	if (params != null)
// 		lnk = path + "?" + params;
// 	// jsonHttp.open('GET', lnk, true);
//     jsonHttp.open(method, lnk, true);
// 	jsonHttp.responseType = 'json';
// 	jsonHttp.onreadystatechange = callback;
// 	jsonHttp.send(null);
// }

function getJJsp(method ,url , sendData ,callbackfunction) {
	xhttp = new XMLHttpRequest();
  xhttp.open(method, url);
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(sendData);
  xhttp.onreadystatechange = callbackfunction
}

function checkLogedIn(){
    var user = localStorage.getItem("user");
    if(user != null && user != undefined){
        return true;
    } else {
        return false;
    }
}
function closePostUpdateModal(){
  document.getElementById("postUpdateModal").style.display = "none";
}
function designPostUpload(title, content , postId){
    var cnt = "";
    cnt += "<div style=\"display: block;z-index: 99999999;background: #0000004a;\" class=\"modal\" id=\"postUpdateModal\" >"
    + "<div class=\"modal-dialog\" role=\"document\">"
      + "<div class=\"modal-content\">"
        + "<div class=\"modal-header\">"
          + "<h5 class=\"modal-title\" id=\"exampleModalLabel\">Update Post</h5>"
          + "<button onclick=\"closePostUpdateModal()\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">"
            + "<span aria-hidden=\"true\">&times;</span>"
          + "</button>"
        + "</div>"
        + "<div class=\"modal-body\">"
          + "<form name=\"editPostForm\" onsubmit=\"return postModification();\">"
          + "<input name=\"postId\" value=\""+postId+"\" type=\"hidden\" >"
            + "<div class=\"form-group\">"
              + "<label for=\"exampleInputEmail1\">Title</label>"
              + "<input value=\""+title+"\" name=\"title\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter title\">"
            + "</div>"
            + "<div class=\"form-group\">"
              + "<label for=\"exampleInputPassword1\">Content</label>"
              + "<input name=\"content\" value=\""+content+"\" type=\"text\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"content\">"
            + "</div>"
            + "<button type=\"submit\" class=\"btn btn-primary\">Submit</button>"
          + "</form>"
        + "</div>"
       
      + "</div>"
    + "</div>"
+ "</div>"
return cnt;
}
function closePostAddModal(){
  document.getElementById("postAddModal").style.display = "none";
}
function designPostAdd(){
    var cnt = "";
    cnt += "<div style=\"display: block;z-index: 99999999;background: #0000004a;\" class=\"modal\" id=\"postAddModal\" >"
    + "<div class=\"modal-dialog\" role=\"document\">"
      + "<div class=\"modal-content\">"
        + "<div class=\"modal-header\">"
          + "<h5 class=\"modal-title\" id=\"exampleModalLabel\">Update Post</h5>"
          + "<button onclick=\"closePostAddModal()\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">"
            + "<span aria-hidden=\"true\">&times;</span>"
          + "</button>"
        + "</div>"
        + "<div class=\"modal-body\">"
          + "<form name=\"addPostForm\" onsubmit=\"false;\">"
         
            + "<div class=\"form-group\">"
              + "<label for=\"exampleInputEmail1\">Title</label>"
              + "<input name=\"title\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter title\">"
              + "<span id=\"title-error-span\">Title must be need</span>"
              + "</div>"

            + "<div class=\"form-group\">"
              + "<label for=\"exampleInputPassword1\">Content</label>"
              + "<input name=\"content\" type=\"text\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"content\">"
              + "<span id=\"content-error-span\">Content must be need</span>"
            + "</div>"

            // + "<div class=\"form-group\">"
            //   + "<label for=\"exampleFormControlFile1\">Upload post image</label>"
            //   + "<input name=\"filesx\" onchange=\"uploadPostImage(event)\" type=\"file\" class=\"form-control-file\" id=\"exampleFormControlFile1\">"
            // + "</div>"

            + "<button type=\"button\" onclick=\"posAddSubmit()\" class=\"btn btn-primary\">Submit</button>"
          + "</form>"
        + "</div>"
       
      + "</div>"
    + "</div>"
+ "</div>"
return cnt;
}
