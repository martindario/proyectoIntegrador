window.addEventListener('load',function(){


})

var slideIndex = [1,1,1];
var slideId = ["mySlides1", "mySlides2", "mySlides3"]

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  //capturo todos los LI del HTML, que tengan la clase seleccionada del array slideId
  var arrayDeLi = document.getElementsByClassName(slideId[no]);
  if (n > arrayDeLi.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = arrayDeLi.length}

  for (i = 0; i < arrayDeLi.length; i++) {
     arrayDeLi[i].style.display = "none";
  }
  arrayDeLi[slideIndex[no]-1].style.display = "block";
}
