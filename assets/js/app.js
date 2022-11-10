const year =document.querySelector("#Year")
const thisyear= new Date().getFullYear()
year.setAttribute("data-custom",thisyear)
year.textContent =thisyear
