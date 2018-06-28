var eu = document.getElementsByClassName('atach');
var wel = document.getElementsByClassName('welcome');
window.addEventListener("scroll", function(){
  if (window.pageYOffset>=415) {
    
    wel[0].style.visibility="hidden";

  }else{

    wel[0].style.visibility="visible";
  }
});
