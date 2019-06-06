var key = '4e07555aebd06c43dcbce0e5a4e01f05'

window.onload = function () {


  fetch("https://api.themoviedb.org/3/movie/popular?api_key="+key+"&language=en-US&page=1")

  .then (function(response) {
    return response.json();
  })
  .then (function(information){
    console.log(information);
    console.log(information.results);
    var arrayDePeliculas = information.results
    var urlImg = "https://image.tmdb.org/t/p/original"
    var poster
    var title
    var li
    var ul = document.querySelector("section.populares ul")
    for (var i = 0; i < 5; i++) {
       poster = arrayDePeliculas[i].poster_path
       title = arrayDePeliculas[i].title
       console.log(arrayDePeliculas[i].title)
//carrusel
       li = "<li class='mySlides1'>"
         li += '<h1>'+ title +'</h1>'
         li += '<img src='+ urlImg + poster + '>'
       li += '</li>'
       ul.innerHTML += li
      //console.log(poster);
    }


    //esto deja visible, solo el primier LI, del PRIMER carrousel
    showSlides(1, 0);
    //esto deja visible, solo el primer LI, del SEGUNDO carrousel
    // showSlides(1, 1);
    //esto deja visible, solo el primer LI, del SEGUNDO carrousel
    // showSlides(1, 2);

    })
     .catch(function(error){
        console.log("There was na error: " + error);
      })

}
