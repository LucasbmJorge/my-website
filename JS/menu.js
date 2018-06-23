var menu = document.getElementById('nav-menu');
var ishide = true;
function hideshow(){
  if(ishide){
  menu.style.top= "4rem";
  ishide= !ishide;
  
  }else{
  menu.style.top="-20rem";
  ishide= !ishide;
  
  }
}
