let userChoice = document.getElementById('user-defined')

let display = document.querySelector('yourSelection')

userChoice.addEventListener('input',  (event) =>{
    display.innerHTML = userChoice.value
})