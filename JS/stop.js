var eu = document.getElementsByClassName('atach');
var wel = document.getElementsByClassName('welcome');

window.addEventListener("scroll", function(){
  if (window.pageYOffset>=415) {
    console.log("hi");
    eu[0].style.position="absolute";
    eu[0].style.top='98vh';
    wel[0].style.visibility="hidden";
  }else{
    eu[0].style.position="fixed";
    eu[0].style.top='16vh';
    wel[0].style.visibility="visible";
  }
});
