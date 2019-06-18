window.onload = function(){
  var queryString = location.search
  var searchParams = new URLSearchParams(queryString);
  var id = searchParams.get("idGenero")
  var key = '14227022544b0f4bb15b6a738161d32f'
  var urlpelisGenero = "pelisGenero.html"
  
  //Pelis
  if(searchParams.has("idGenero")){
    fetch("https://api.themoviedb.org/3/discover/movie?api_key="+key+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres="+id)
        .then(function(respuesta) {
         return respuesta.json()
       })
        .then(function(informacion) {
         var peliculas = informacion.results
         console.log(informacion)

         for (var i = 0; i < 10 ; i++) { //informacion.results.length
           console.log('esto es informacion' + peliculas);
           var titulo = peliculas[i].title
           var url = 'https://image.tmdb.org/t/p/w500/'
           var img =  peliculas[i].poster_path;
           var id = peliculas[i].id

          var li;
          li = '<li>'
          li += '<img src=' + url + img + '>'
          li += '<div class="uk-position-center uk-panel"><h1>' + titulo + '</h1></div>'
          li += '</li>'

          console.log(li);

          document.querySelector("section").innerHTML += li
         }
        })
  }

}
