let submitBtn = document.querySelector('.submitBtn')
let errorText = document.querySelector('#errorText')
let body = document.querySelector('body')
function throwError(error){
    errorText.innerText = error
            setTimeout(() => {
            errorText.style.display = 'none'
        }, 1500)
}
submitBtn.addEventListener('click', event => {
    event.preventDefault()
    getUserData()
})
function getUserData() {
    
    let userName = document.querySelector('input')
    let firstName = document.querySelectorAll('input')[1]
    let lastName = document.querySelectorAll('input')[2]
    let email = document.querySelectorAll('input')[3]
    let password = document.querySelectorAll('input')[4]
    let confirmPass = document.querySelectorAll('input')[5]
 
    if (/[!@#$%&*]/.test(userName.value)) {
        errorText.style.display = 'block'
        throwError('Username should not include any special characters')
    }
    else
        {
        if (password.value.length < 8) {
            errorText.style.display = 'block'
            throwError('Password must contain 8 characters')
        }
        else {
            if (confirmPass.value != password.value) {
                errorText.style.dislpay = 'block'
                throwError('Confirm password must be the same as password')
            }
    
        }
    }

    let data = {
        userName: userName.value,
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,

    }

}