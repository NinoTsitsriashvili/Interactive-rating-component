const mainContainer = document.querySelector(".container")
const thanksContainer = document.querySelector(".thank-you-cont")
const submitButton = document.getElementById("submit")
const rateAgain = document.getElementById("rate-again")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".rate")


submitButton.addEventListener("click", () => {
    mainContainer.style.display = "none"
    thanksContainer.classList.remove("hidden")
})

rateAgain.addEventListener('click', () => {
    thanksContainer.classList.add("hidden")
    mainContainer.style.display = "block"
})

rates.forEach((rate) => {

    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})