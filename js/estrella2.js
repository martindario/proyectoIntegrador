window.addEventListener('load',function(){
  // Obtengo la info de local storage
      var favoritos = localStorage.getItem("favoritos")
      // Si ya habia favoritos..
      if (favoritos != null) {
        // Desempaquetar el string JSON
        favoritos = JSON.parse(favoritos).listadoFavoritos
      } else {
        // Si no habia creo el listado como VACIO
        favoritos = []
      }
      if (favoritos.indexOf("query") >= 0) {
                            document.querySelector(".estrellita").innerHTML += "<button class='favorito' id='botoncitoFavoritos' idPeli=" + query + ">Quitar de Favoritos</button><br>"
                            } else {
                            document.querySelector(".estrellita").innerHTML += "<button class='favorito' id='botoncitoFavoritos' idPeli=" + query + ">Agregar a Favoritos</button><br>"
                            }
                            console.log("hola");
                            // IDEA: document.querySelector("section.detalle").innerHTML += "<img src=" + url + ">"
                            // Bien! Ya cree todos los botones (Ojo que igual ustedes van a tener uno solo). Entonces los obtengo con querySelectorAll
                            var boton = document.querySelector("button.favorito")
                               // A CADA BOTON le pongo un evento onclick
                              boton.onclick = function(event) {
                 // Obtengo en que GIF se clickeo
                                var idPeli = this.getAttribute("idPeli")
                                // Si no lo tenia ya como preferido
                                if (favoritos.indexOf(idPeli) == -1) {
                                  //Agrego el gif nuevo!
                                  favoritos.push(idPeli)
                                  //Y cambio el texto del boton
                                  this.innerHTML = "Quitar de Favoritos"
                                } else {
                                  // Lo tengo que quitar!!!
                                  var index = favoritos.indexOf(idPeli);
                                  favoritos.splice(index, 1);
                                  // Y cambio el texto del boton
                                  this.innerHTML = "Agregar a Favoritos"
                                }
                                // Aca transformo el array en un obj literal para poder guardarlo
                                favoritos = {
                                  "listadoFavoritos" : favoritos
                                }
                                // Y lo transformo en string para poder guardarlos
                                favoritos = JSON.stringify(favoritos)
                                // Y aca guardo en localStorage
                                localStorage.setItem("favoritos", favoritos)
                                // Y devuelvo en la variable el array real
                                favoritos = JSON.parse(favoritos).listadoFavoritos
                              }
})
