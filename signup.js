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

function valueTrim(input) {
    input.value = input.value.trim()
}

function checkData( firstName, lastName, email, password, confirmPass, allUsers) {
    if (!firstName.value || !lastName.value || !email.value || !password.value || !confirmPass.value) {
        throwError('All fields are required')
        return false
    }
    if (email.value.includes(' ')) {
        throwError('Email must not contain any spaces')
        return false
    }
    if (!email.value.includes('@') || !email.value.includes('.com')) {
        throwError('Wrong Email Address')
        return false
    }
    if (password.value.length < 8) {
        throwError('Password must contain 8 characters')
        return false
    }

    if (confirmPass.value != password.value) {
        throwError('Confirm password must be the same as password')
        return false
    }

    let sameEmail = allUsers.find(user => {
        return user.email == email.value
    })
    if (sameEmail) {
        throwError('Email is already registered')
        return false
    }
    return true
}


submitBtn.addEventListener('click', event => {
    event.preventDefault()
    getUserData()
})
body.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        submitBtn.click()
    }
})


let inputs = document.querySelectorAll('input')
inputs.forEach(input => {
    valueTrim(input)
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
function getUserData() {
    let allUsers = JSON.parse(localStorage.getItem('allUsers')) || []

    let [firstName, lastName, email, password, confirmPass] = inputs

    if (!checkData(firstName, lastName, email, password, confirmPass, allUsers)) {
        return
    }


    let userData = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
    }
    allUsers.push(userData)
    localStorage.setItem('allUsers', JSON.stringify(allUsers))

    let modalScreen = document.querySelector('.modalScreen')
    let modal = document.querySelector('.modal')
    modalScreen.style.display = 'flex'
    setTimeout(() => {
        modal.style.opacity = '1'
    }, 100)

    let closeModal = document.querySelector('.cut')
    closeModal.addEventListener('click', () => {
        setTimeout(() => {
            modalScreen.style.display = 'none'
        }, 300)
        modal.style.opacity = '0'

    })
    document.querySelector('.modal button').addEventListener('click',() => window.location='./login/login.html')}