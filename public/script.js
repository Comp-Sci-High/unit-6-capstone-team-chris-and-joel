const createForm = document.querySelector("form")

createForm.addEventListener("submit", async (e) =>{
e.preventDefault()
const data = new FormData(createForm)


})



async function deletestudents(id) {
 await fetch('/delete/' + id, {method: 'DELETE'});
 window.location.href = "/students"
}



