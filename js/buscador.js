window.onload = function () {
var key = '14227022544b0f4bb15b6a738161d32f'
var urlDetalle = "pagina5.html"

var queryString = location.search
var urlSearch = new URLSearchParams(window.location.search)
var id = urlSearch.get("busqueda")

fetch("https://api.themoviedb.org/3/search/movie?api_key="+key+"&language=en-US&query="+id+"&page=1&include_adult=false")

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
  //var ul = document.querySelector("section.populares ul")
  var ul1 = document.querySelector("section ul")
  //var ul2 = document.querySelector("section.comingSoon ul")
  for (var i = 0; i < 5; i++) {
      poster = arrayDePeliculas[i].poster_path
      title = arrayDePeliculas[i].title
      console.log(arrayDePeliculas[i].title)

     // li = "<li class='mySlides2'>"
      // li += '<h1>'+ title +'</h1>'
      // li += '<img src='+ urlImg + poster + '>'
      // li += '</li>'
      // ul1.innerHTML += li
      li = "<li>"
      li += "<a href='"+urlDetalle+"?id="+arrayDePeliculas[i].id+"'>"
      li += "<h1>"+ title +"</h1>"
      li += '<img src='+ urlImg + poster + '>'
      li += "</a>"
      li += "</li>"
      ul1.innerHTML += li
    //console.log(poster);
   }

  })
   .catch(function(error){
      console.log("There was na error: " + error);
    })
}
