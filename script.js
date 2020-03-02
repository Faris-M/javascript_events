// Fonctionnalité 1 & 1-bis : nombres de clics footer

let footer = document.getElementsByTagName("footer")[0]
let i=1;

footer.addEventListener("click", function(){
  console.log(`il y a eu  ${i} clic(s)`);
  i+=1
});

// Fonctionnalité 2 : menu déroulant ("hamburger menu")

let navbarHeader  = document.getElementById("navbarHeader")
let togglerBtn = document.getElementsByClassName("navbar-toggler")[0]

togglerBtn.addEventListener("click", function(){
  navbarHeader.classList.toggle("collapse")
})

// Fonctionnalité 3 : Command and Conquer html 5 : Red Alert 

let editBtn1  = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0]
let cardText1 = document.getElementsByClassName("card-text")[0]

editBtn1.addEventListener("click", function(){
  cardText1.style.color = "red"
})

// Fonctionnalité 4 : green (css) card

let editBtn2  = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1]
let cardText2 = document.getElementsByClassName("card-text")[1]

editBtn2.addEventListener("click", function(){
  cardText2.style.color == "green" ? cardText2.style.color = "black" : cardText2.style.color = "green"
})

// Fonctionnalité 5 : back to basics

let bootstrapLink = document.getElementsByTagName("link")[0]
let navbarZone    = document.getElementsByClassName("navbar navbar-dark bg-dark box-shadow")[0]

navbarZone.addEventListener("dblclick", function(){
  if (bootstrapLink.disabled == true) {
    bootstrapLink.disabled = false
  } else {
    bootstrapLink.disabled = true
  }
})
