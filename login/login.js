import { getLoggedInUser, signinUser } from "../firebase.js"

let submitBtn = document.querySelector('.submitBtn')
let errorText = document.querySelector('#errorText')
let body = document.querySelector('body')

getLoggedInUser()

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
async function loginUser() {

    let [emailInput, passwordInput] = inputs

    if (!emailInput.value || !passwordInput.value) {
        throwError('All fields are required')
        return
    }

    try {
        const user = await signinUser(emailInput.value, passwordInput.value)

    } catch (error) {
        if (error.code === 'auth/invalid-credential') {
            throwError('Invalid email or password')
            return
        }
        if (error.code === 'auth/too-many-requests') {
            throwError('Too many attempts. Try again later')
            return
        }

    }

    window.location = './../quizApp/index.html'
}
