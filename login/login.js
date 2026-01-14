let submitBtn = document.querySelector('.submitBtn')
let errorText = document.querySelector('#errorText')
let body = document.querySelector('body')

function throwError(error) {
    errorText.style.display = 'block'
    errorText.innerText = error
    setTimeout(() => {
        errorText.style.display = 'none'
        errorText.innerText = ''
    }, 1500)
}

submitBtn.addEventListener('click', event => {
    event.preventDefault()
    loginUser()
})
body.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        submitBtn.click()
    }
})

let inputs = document.querySelectorAll('input')
inputs.forEach(input => {
    input.addEventListener('keydown', e => {
        if (e.key === 'ArrowDown') {
            e.preventDefault()
            input.nextElementSibling.focus()
        }
        if (e.key === 'ArrowUp') {
            e.preventDefault()
            input.previousElementSibling.focus()
        }
    })
})
function loginUser() {
let allUsers = JSON.parse(localStorage.getItem('allUsers')) || []

let [emailInput, passwordInput] = inputs

if (!emailInput.value || !passwordInput.value) {
    throwError('All fields are required')
    return
}


let foundUser = allUsers.find(user => user.email == emailInput.value)

if (!foundUser) {
    throwError('Email is not registered')
    return
}


if (foundUser.password !== passwordInput.value) {
    throwError('Incorrect Password')
    return
}


sessionStorage.setItem('logginedUser', JSON.stringify(foundUser))
    window.location = './../quizApp/index.html'
}
