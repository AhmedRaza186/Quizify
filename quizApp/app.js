//imports
import { quizCards, quizCategories } from "./quizData.js"

//decleration
let dp = document.querySelector('.circle')
let sidebar = document.querySelector('.profileSidebar')
let overlay = document.querySelector('.overlay')
let body = document.querySelector('body')

//sidebar functionality
dp.addEventListener('click', () => {
    sidebar.classList.add('active')
    overlay.classList.add('active')
})

overlay.addEventListener('click', () => {
    sidebar.classList.remove('active')
    overlay.classList.remove('active')
})

// check user is loggined?
let logginedUser = JSON.parse(sessionStorage.getItem('logginedUser'))

//IF not
if (!logginedUser) {
    window.location = './../login/login.html'
}

// IF yes
else {
    //name Display
    let { firstName, lastName } = logginedUser
    let showFullName = document.querySelectorAll('#name')
    showFullName.forEach((name) => {
        name.innerText = firstName + ' ' + lastName

    })

    let shortNames = document.querySelectorAll('#shortName')
    shortNames.forEach((circle) => {
        circle.innerText = (firstName[0] + lastName[0]).toUpperCase()
    })

    //Avg Score Progress
    let progress = document.querySelector('.progressFill')
    progress.style.width = '72%'


    //logout Functionality
    let logoutBtn = document.querySelector('.logoutBtn')
    logoutBtn.addEventListener('click', () => {
        sessionStorage.removeItem('logginedUser')
        window.location = './../login/login.html'
    })

    //categories & sub-categories Display
    let categoriesContainer = document.querySelector('.quizCategories')
    let subCategoriesContainer = document.querySelector('.subCategories')

    quizCategories.forEach((cat) => {
        let btn = document.createElement('button')
        btn.className = 'category'
        btn.innerText = cat.title

        btn.addEventListener('click', () => {
            subCategoriesContainer.innerHTML = ''
   if (!cat.subCategories) {
                subCategoriesContainer.innerHTML = `<p style="color: gray">Coming soon...</p>`
                return
            }

            cat.subCategories.forEach(sub => {
                let subBtn = document.createElement('button')
                subBtn.className = 'subCategory'
                subBtn.innerText = sub
                subBtn.addEventListener('click', () => {
                    showCards(sub)
                })
                subCategoriesContainer.appendChild(subBtn)
            })

        })

        categoriesContainer.appendChild(btn)
    })

    //Cards Display
    let cardsContainer = document.querySelector('.quizCards')
    function showCards(sub){
        cardsContainer.innerHTML = ''
        let cards = quizCards[sub]
        console.log(cards)
cards.map(card=>{
    console.log(card.img)
    cardsContainer.innerHTML+= `<div class="quizCard">
                <img src="${card.img}" alt="quiz">
                <div class="cardBody">
                    <h3>${card.title}</h3>
                    <div class="cardMeta">
                        <span class="level">${card.level}</span>
                        <span class="questions">questions:${card.questions}</span>
                    </div>
                    <button class="startBtn">Start Quiz</button>
                </div>
            </div>`

})
    }


}
