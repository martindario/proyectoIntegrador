window.addEventListener("load", function(){
  document.querySelector("form").addEventListener("submit",function(event){
    event.preventDefault()
    var name= document.querySelector("input[name='nombre']").value
    console.log(name);
    sessionStorage.setItem("nombre",name)
    sessionStorage.getItem("nombre")
    var email = document.querySelector("input[name='email']").value
    sessionStorage.setItem("email",email)
    sessionStorage.getItem("email")
    var gender = document.querySelector("select[name='Gender']").selectedIndex
    console.log(gender);
    sessionStorage.setItem("gender",gender)
    sessionStorage.getItem("gender")
  })
})
