const btn = document.getElementById("btn")
const parag = document.querySelectorAll(".toggle")

btn.addEventListener("click", () => {
  parag.forEach((el) => {
    el.classList.toggle("hidden")
  })
})
