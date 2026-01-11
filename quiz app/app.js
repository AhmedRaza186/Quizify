import { quizCards, quizCategories } from "./quizData.js"


let dp = document.querySelector('.circle')
let sidebar = document.querySelector('.profileSidebar')
let overlay = document.querySelector('.overlay')
let body = document.querySelector('body')

dp.addEventListener('click', () => {
    sidebar.classList.add('active')
    overlay.classList.add('active')
})

overlay.addEventListener('click', () => {
    sidebar.classList.remove('active')
    overlay.classList.remove('active')
})

let logginedUser = JSON.parse(sessionStorage.getItem('logginedUser'))
if (!logginedUser) {
    window.location = './../login/login.html'
}
else {
    let { firstName, lastName } = logginedUser
    let showFullName = document.querySelectorAll('#name')
    showFullName.forEach((name) => {
        name.innerText = firstName + ' ' + lastName

    })

    let shortNames = document.querySelectorAll('#shortName')
    shortNames.forEach((circle) => {
        circle.innerText = (firstName[0] + lastName[0]).toUpperCase()
    })


    let progress = document.querySelector('.progressFill')
    progress.style.width = '72%'

    let logoutBtn = document.querySelector('.logoutBtn')
    logoutBtn.addEventListener('click', () => {
        sessionStorage.removeItem('logginedUser')
        window.location = './../login/login.html'
    })


    let categoriesContainer = document.querySelector('.quizCategories')
    let subCategoriesContainer = document.querySelector('.subCategories')


    quizCategories.forEach((cat) => {
        let btn = document.createElement('button')
        btn.className = 'category'
        btn.innerText = cat.title

        btn.addEventListener('focus', () => {
            subCategoriesContainer.innerHTML = ''
            btn.addEventListener('blur', () => {
                subCategoriesContainer.innerHTML = ''

            })

            if (!cat.subCategories) {
                subCategoriesContainer.innerHTML = `<p style="color: gray">Coming soon...</p>`
                return
            }

            cat.subCategories.forEach(sub => {
                let subBtn = document.createElement('button')
                subBtn.className = 'subCategory'
                subBtn.innerText = sub

                subCategoriesContainer.appendChild(subBtn)
            })

        })

        categoriesContainer.appendChild(btn)
    })
}

