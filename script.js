let rating = document.getElementById('rating')
const rates = document.querySelectorAll('.number')
const submit = document.getElementById('submit')
let ratingNum = ""
const card1 = document.getElementById('card-1')
const card2 = document.getElementById('card-2')

rates.forEach((rate) => {
    rate.addEventListener('click', () => { 
        rating.innerHTML = rate.innerHTML
        
        submit.addEventListener('click', () => {
            card2.style.display = "block"
            card1.style.display = "none"
        })
    })    
})