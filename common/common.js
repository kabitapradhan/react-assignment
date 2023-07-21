// document.getElementById("myHead").innerHTML =
// 	"<span id='headerText'>Title</span>"
// 	+ "<span id='headerSubtext'>Subtitle</span>";
document.getElementById("myNav").innerHTML = "";
var nav = 
	"<header class=\"header_section\" >"
    + "<nav class=\"navbar navbar-expand-lg custom_nav-container \" style=\"box-shadow: 0 7px 9px -6px #888;\">"

      + "<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" "
        + "aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">"
        + "<span class=\"\"></span>"
      + "</button>"
      + "<div class=\"container post-container\">"
        + "<div>"
          + "<!-- post content hide -->"
          + "<div class=\"post-content-container\">"
            + "<marquee direction=\"left\"> Latest: CMA inter Module 2 batch starting from January 18th</marquee>  "
          + "</div>"
          + "<div class=\"contact-us-container\"></div>"
        + "</div>"
      + "</div>"

      + "<div class=\"container collapse navbar-collapse\" id=\"navbarSupportedContent\">"
        + "<div style=\"flex-grow: 1;\"><img style=\"width: 170px;\" src=\"/images/logo2.jpg\" alt=\"\"></div>"
        + "<ul class=\"navbar-nav  \">"
          + "<li class=\"nav-item active\">"
            + "<a class=\"nav-link\" href=\"index.html\">Home</a>"
          + "</li>"
          + "<li class=\"nav-item dropdown classrooms_header_dropdown\"  >"
            + "<a class=\"nav-link \" href=\"shop.html\">Classrooms</a>"
            + "<div class=\"dropdown-content classrooms_dropdown_content\">"
              + "<a href=\"#\">Classroom 1</a>"
              + "<a href=\"#\">Classroom 2</a>"
              + "<a href=\"#\">Classroom 3</a>"
              + "<a href=\"#\">Classroom 3</a>"
            + "</div>"
          + "</li>"
          + "<li class=\"nav-item faculties_header_dropdown dropdown\">"
            + "<a class=\"nav-link \" href=\"why.html\">Faculties</a>"
            + "<div class=\"dropdown-content faculties_dropdown_content\">"
              + "<a href=\"#\">Faculty 1</a>"
              + "<a href=\"#\">Faculty 2</a>"
              + "<a href=\"#\">Faculty 3</a>"
              + "<a href=\"#\">Faculty 3</a>"
            + "</div>"
          + "</li>"
          + "<li class=\"nav-item courses_header_dropdown dropdown\">"
            + "<a class=\"nav-link \" href=\"testimonial.html\">Courses</a>"
            + "<div class=\"dropdown-content courses_dropdown_content\">"
              + "<a href=\"#\">Course 1</a>"
              + "<a href=\"#\">Course 2</a>"
              + "<a href=\"#\">Course 3</a>"
              + "<a href=\"#\">Course 3</a>"
            + "</div> "
          + "</li> "
          + "<li class=\"nav-item\"> "
            + "<a class=\"nav-link aboutus_header\" href=\"contact.html\">About Us</a> "
          + "</li> "
          if(checkLogedIn()){
            nav += "<li class=\"nav-item\"> "
              + "<a class=\"nav-link aboutus_header\" href=\"posts.html\">Posts</a> "
            + "</li> "
          }
        nav += "</ul> "
        + "<div class=\"user_option\"> "
        if(!checkLogedIn()){
          nav += "<a onclick=\"clickToLogin()\"> "
            + "<i class=\"fa fa-user\" aria-hidden=\"true\"></i> "
            + "<span> Login </span> "
          + "</a>"
        }
        
         
        nav += "<a href=\"\">"
            + "<i class=\"fa fa-shopping-bag\" aria-hidden=\"true\"></i>"
          + "</a>"
          + "<form class=\"form-inline \">"
           + " <button class=\"btn nav_search-btn\" type=\"submit\">"
             + " <i class=\"fa fa-search\" aria-hidden=\"true\"></i>"
            + "</button>"
          + "</form>"
        + "</div>"
      + "</div>"
    + "</nav>"
  + "</header>";
document.getElementById("myNav").innerHTML = nav;
// document.getElementById("myFooter").innerHTML =
// 	"<p id='copyright'>Copyright &copy; " + new Date().getFullYear() + " You. All"
// 	+ " rights reserved.</p>"
// 	+ "<p id='credits'>Layout by You</p>"
// 	+ "<p id='contact'><a href='mailto:you@you.com'>Contact Us</a> / "
// 	+ "<a href='mailto:you@you.com'>Report a problem.</a></p>";

// function headercall(){
//     document.getElementById("myHeadx").innerHTML = "<meta charset=\"utf-8\" />"
//     + "<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />"
   
//     + "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\" />"
    
//     + "<meta name=\"keywords\" content=\"\" />"
//     + "<meta name=\"description\" content=\"\" />"
//     + "<meta name=\"author\" content=\"\" />"
//     + "<link rel=\"shortcut icon\" href=\"images/favicon.png\" type=\"image/x-icon\"></link>"
//     + " <link rel=\"stylesheet\" type=\"text/css\" "
//     + "href=\"https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css\" />"

//   + "<!-- bootstrap core css -->"
//   + "<link rel=\"stylesheet\" type=\"text/css\" href=\"css/bootstrap.css\" />"
//   + "<!-- Custom styles for this template -->"
//   + "<link href=\"css/style.css\" rel=\"stylesheet\" />"
//   + "<!-- responsive style -->"
//   + "<link href=\"css/responsive.css\" rel=\"stylesheet\" />" ;
// //     return abc ;
// }