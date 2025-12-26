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

function checkData(userName, firstName, lastName, email, password, confirmPass, allUsers) {
    if (!userName.value || !firstName.value || !lastName.value || !email.value || !password.value || !confirmPass.value) {
        throwError('All fields are required')
        return false
    }
    if (/[!@#$%&*]/.test(userName.value)) {
        throwError('Username should not include any special characters')
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

    let sameUserName = allUsers.find(user => {
        return user.userName == userName.value
    })
    let sameEmail = allUsers.find(user => {
        return user.email == email.value
    })
    if (sameUserName) {
        throwError('Username is already taken')
        return false
    }
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

    let [userName, firstName, lastName, email, password, confirmPass] = inputs

    if (!checkData(userName, firstName, lastName, email, password, confirmPass, allUsers)) {
        return
    }


    let userData = {
        userName: userName.value,
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
    }
    allUsers.push(userData)
    localStorage.setItem('allUsers', JSON.stringify(allUsers))

    window.location = './login/login.html'
}