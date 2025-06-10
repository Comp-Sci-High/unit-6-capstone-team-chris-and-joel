const e = require("express")

const he = document.querySelector("form")

he.addEventListener("submit", (event)=>{
e.preventDefult()

const thePlayer = new FormData(he)
console.log(thePlayer)

const reqBody = object.fromEntries(thePlayer)
console.log(reqBody)




})