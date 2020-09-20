const menumobile = document.querySelector('.menuover')
const open = document.querySelector('.hamburger')
let close = document.querySelector('.close0')
let close1 = document.querySelector('.close1')
let close2 = document.querySelector('.close2')
let close3 = document.querySelector('.close3')

open.addEventListener("click", function() {
  menumobile.classList.add("active")
})

close.addEventListener("click", function() {
  menumobile.classList.remove("active")
})

close1.addEventListener("click", function() {
  menumobile.classList.remove("active")
})

close2.addEventListener("click", function() {
  menumobile.classList.remove("active")
})

close3.addEventListener("click", function() {
  menumobile.classList.remove("active")
})
