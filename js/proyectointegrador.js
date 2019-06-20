var key = '14227022544b0f4bb15b6a738161d32f'
var urlDetalle = "pagina5.html"

window.onload = function () {

if (window.sessionStorage.getItem("nombre")!="" && window.sessionStorage.getItem("nombre")!=null) {
alert("Bienvenido "+ window.sessionStorage.getItem("nombre"))
document.querySelector('a button.login').innerHTML = window.sessionStorage.getItem("nombre")
}
else {
  alert("Porque no prueba creandose una cuenta")
}

//carrusel1
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
    //var ul1 = document.querySelector("section.MayorPuntaje ul")
    //var ul2 = document.querySelector("section.comingSoon ul")
    for (var i = 0; i < 5; i++) {
       poster = arrayDePeliculas[i].poster_path
       title = arrayDePeliculas[i].title
       video = arrayDePeliculas[i].video
       console.log(arrayDePeliculas[i].title)
//carrusel
       li = "<li class='mySlides1'>"
       li += "<a href='"+urlDetalle+"?id="+arrayDePeliculas[i].id+"'>"
       li += "<h1>"+ title +"</h1>"
       li += '<img src='+ urlImg + poster + '>'
       li += "</a>"
       li += "</li>"
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

  //carrousel2

  fetch("https://api.themoviedb.org/3/movie/top_rated?api_key="+key+"&language=en-US&page=1")

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
        var ul1 = document.querySelector("section.MayorPuntaje ul")
        //var ul2 = document.querySelector("section.comingSoon ul")
        for (var i = 0; i < 5; i++) {
           poster = arrayDePeliculas[i].poster_path
           title = arrayDePeliculas[i].title
           console.log(arrayDePeliculas[i].title)
      //carrusel
           // li = "<li class='mySlides2'>"
           //   li += '<h1>'+ title +'</h1>'
           //   li += '<img src='+ urlImg + poster + '>'
           // li += '</li>'
           // ul1.innerHTML += li
           li = "<li class='mySlides2'>"
           li += "<a href='"+urlDetalle+"?id="+arrayDePeliculas[i].id+"'>"
           li += "<h1>"+ title +"</h1>"
           li += '<img src='+ urlImg + poster + '>'
           li += "</a>"
           li += "</li>"
           ul1.innerHTML += li
          //console.log(poster);
        }


        //esto deja visible, solo el primier LI, del PRIMER carrousel
        showSlides(1, 1);
        //esto deja visible, solo el primer LI, del SEGUNDO carrousel
        // showSlides(1, 1);
        //esto deja visible, solo el primer LI, del SEGUNDO carrousel
        // showSlides(1, 2);

        })
         .catch(function(error){
            console.log("There was na error: " + error);
          })
  //carrusel3
    fetch("https://api.themoviedb.org/3/movie/upcoming?api_key="+key+"&language=en-US&page=1")

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
            //var ul1 = document.querySelector("section.MayorPuntaje ul")
            var ul2 = document.querySelector("section.comingSoon ul")
            for (var i = 0; i < 5; i++) {
               poster = arrayDePeliculas[i].poster_path
               title = arrayDePeliculas[i].title
               console.log(arrayDePeliculas[i].title)
          //carrusel
               // li = "<li class='mySlides3'>"
               //   li += '<h1>'+ title +'</h1>'
               //   li += '<img src='+ urlImg + poster + '>'
               // li += '</li>'
               // ul2.innerHTML += li
               li = "<li class='mySlides3'>"
               li += "<a href='"+urlDetalle+"?id="+arrayDePeliculas[i].id+"'>"
               li += "<h1>"+ title +"</h1>"
               li += '<img src='+ urlImg + poster + '>'
               li += "</a>"
               li += "</li>"
               ul2.innerHTML += li
              //console.log(poster)
            }


            //esto deja visible, solo el primier LI, del PRIMER carrousel
            showSlides(1, 2);
            //esto deja visible, solo el primer LI, del SEGUNDO carrousel
            // showSlides(1, 1);
            //esto deja visible, solo el primer LI, del SEGUNDO carrousel
            // showSlides(1, 2);

            })
             .catch(function(error){
                console.log("There was na error: " + error);
              })

}
