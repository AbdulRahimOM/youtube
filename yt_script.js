let navCover=document.getElementById("nav-cover");
let navbar=document.getElementById("navbar-overlay");
let blankspace=document.getElementById("blank-left-sect-dup");
let navbarlogo=document.getElementById("logo-in-navbar");
let sidebar=document.getElementById("scrollable-left");
let smallSidebar=document.getElementById("reduced-left");
$(document ).ready(function() {
    hideNavbar()
    if (window.matchMedia("(max-width: 792px)").matches){
        hideSidebar();
        hideSmallSidebar();

    }else if (window.matchMedia("(max-width: 1313px)").matches){
        hideSidebar()
        showSmallSidebar()

    }else{
        hideSmallSidebar()
        showSidebar()
    }
});
function menuclick(){

    if (window.matchMedia("(max-width: 1313px)").matches){
        if (navbar.style.width=="0px"){
            showNavbar();
        }else{
            hideNavbar();
        }
    }else{
        if((blankspace.style.width=="240px")){
            hideSidebar();
            showSmallSidebar();
        }else{
            hideSmallSidebar();
            showSidebar();
        }
    }
}
window.addEventListener("resize", function() {
    hideNavbar();
    hideSmallSidebar();
    showSidebar();
    if (window.matchMedia("(max-width: 1313px)").matches){
        hideSidebar();
        showSmallSidebar();
    }
    if (window.matchMedia("(max-width: 792px)").matches) {
        hideSidebar();
        hideSmallSidebar();
    }
  })
function showNavbar(){
    navbar.style.width="240px";
    navbarlogo.style.width="240px";
    navbar.style.visibility="visible";
    navbarlogo.style.visibility="visible";
    navCover.style.visibility="visible";
}

function hideNavbar(){
    navbar.style.width="0px";
    navbarlogo.style.width="0px";
    navbar.style.visibility="hidden";
    navbarlogo.style.visibility="hidden";
    navCover.style.visibility="hidden";
}
function showSidebar(){
    sidebar.style.visibility="visible";
    sidebar.style.width="240px";
    sidebar.style.display="block";
    blankspace.style.width="240px";
}
function hideSidebar(){
    sidebar.style.visibility="hidden";
    sidebar.style.width="0px";
    sidebar.style.display="none";
    blankspace.style.width="0px";

}
function showSmallSidebar(){
    smallSidebar.style.visibility="visible";
    smallSidebar.style.width="64px";
    smallSidebar.style.display="block";
    blankspace.style.width="64px";
}
function hideSmallSidebar(){
    smallSidebar.style.visibility="hidden";
    smallSidebar.style.width="0px";
    smallSidebar.style.display="none";
    blankspace.style.width="0px";
}