var eu = document.getElementById('eu');
var fique = document.getElementsByClassName('fique');
var spacer = document.getElementsByClassName('spacer');
var wel = document.getElementsByClassName('bem');
var nav = document.getElementById('menu');



window.addEventListener("scroll", function(){

 //Code for all screen sizes.
  if (window.pageYOffset>=415)
   {wel[0].style.visibility="hidden";
    wel[1].style.visibility="hidden";
    fique[0].style.visibility="hidden";}

  else{wel[0].style.visibility="visible";
      fique[0].style.visibility="visible"; }


//Code for Tablets.
  if (window.innerWidth >= 560 && window.innerWidth <= 1140) {
    if(window.pageYOffset >= 465){
      eu.style.position="static";
        eu.style.width="16%";
      eu.style.filter="grayscale(100%)";
      spacer[0].style.position="fixed";
    }else{
      eu.style.position="fixed";
      eu.style.filter="none";
      spacer[0].style.position="static"
       wel[1].style.visibility="visible";;
    }

  }

 //Code for Pc.
    if (window.innerWidth >= 1140) {
      if(window.pageYOffset >= 580){
        eu.style.position="static";
        eu.style.width="8.5%";
        eu.style.filter="grayscale(100%)";
        spacer[0].style.position="fixed";
      }else{
        eu.style.position="fixed";
        eu.style.filter="none";
        spacer[0].style.position="static";
         wel[1].style.visibility="visible";
      }

      if (window.pageYOffset >=620) {
        nav.style.position="fixed";
        nav.style.top="0";
        nav.style.left="0";
      }else{
        nav.style.position="static";
      }
    }

});
