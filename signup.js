import { addUserDetails, getLoggedInUser, setSigningUp, signupUsers } from "./firebase.js"

let submitBtn = document.querySelector('.submitBtn')
let errorText = document.querySelector('#errorText')
let body = document.querySelector('body')
let uid
getLoggedInUser()
function throwError(error) {
    errorText.style.display = 'block'
    errorText.innerText = error
    setTimeout(() => {
        errorText.style.display = 'none'
        errorText.innerText = ''
    }, 1500)
}


function checkData(firstName, lastName, email, password, confirmPass) {
    if (!firstName.value || !lastName.value || !email.value || !password.value || !confirmPass.value) {
        throwError('All fields are required')
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

    return true
}


submitBtn.addEventListener('click', event => {
    event.preventDefault()
    getUserData()
})
body.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        submitBtn.click()
        submitBtn.disabled = true
        submitBtn.style.opacity = '0.7'
        setTimeout(() => {
            submitBtn.style.opacity = '1'

            submitBtn.disabled = false

        }, 1500)
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

async function getUserData() {

    let [firstName, lastName, email, password, confirmPass] = inputs

    if (!checkData(firstName, lastName, email, password, confirmPass)) {
        return
    }

    try {
        setSigningUp(true);
        const user = await signupUsers(email.value, password.value)
        uid = user.uid

        let userData = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            createdAt:new Date()
        }
        await addUserDetails(uid,userData)
    
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
        document.querySelector('.modal button').addEventListener('click', () => window.location = './login/login.html')
    } catch (error) {

        if (error.code === 'auth/email-already-in-use') {
            throwError('Email already registered')
            return
        }
        if (error.code === 'auth/invalid-email') {
            throwError('Invalid email address')
            return
        }

    }

}
