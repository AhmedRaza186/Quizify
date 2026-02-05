//imports
import { uploadImg } from "../cloudinary.js"
import { updateUserDetails, getLoggedInUser, getUserDetails, logout } from "../firebase.js"
import { quizCards, quizCategories } from "./quizData.js"


//decleration
let body = document.body
let dp = document.querySelector('.circle')
let sidebar = document.querySelector('.profileSidebar')
let overlay = document.querySelector('.overlay')
let categoriesContainer = document.querySelector('.quizCategories')
let subCategoriesContainer = document.querySelector('.subCategories')
let cardsContainer = document.querySelector('.quizCards')
let profilePicCircle = document.querySelectorAll('.pic')



//sidebar functionality
dp.addEventListener('click', () => {
    sidebar.classList.add('active')
    overlay.classList.add('active')
})

overlay.addEventListener('click', () => {
    sidebar.classList.remove('active')
    overlay.classList.remove('active')
})


// getting loggined user details
let logginedUser = await getLoggedInUser()
let userData = await getUserDetails(logginedUser)



//name Display
let { firstName, lastName } = userData
let showFullName = document.querySelectorAll('#name')
showFullName.forEach((name) => {
    name.innerText = firstName + ' ' + lastName

})


// profile Pic display
if (userData.profilePic) {
        profilePicCircle.forEach((circle) => {
            circle.style.backgroundImage = `url(${userData.profilePic})`
           circle.style.backgroundSize = 'cover'
           circle.style.backgroundPosition = 'center'
    })
}
else {
    profilePicCircle.forEach((circle) => {
        circle.innerText = (firstName[0] + lastName[0]).toUpperCase()
    })
}



//Avg Score Progress
let progress = document.querySelector('.scoreText h2')
let progressFill = document.querySelector('.progressFill')

if (userData.progress) {
    progress.innerText = userData.progress
    progressFill.style.width = userData.progress
}
else {
    progress.innerText = '0%'
    progressFill.style.width = '70%'
}


// quizPlayed
let quizPlayed
if (userData.quizPlayed) {
    quizPlayed = userData.quizPlayed
}
else {
    quizPlayed = 0
}
let basedOnQuizzesUI = document.querySelector('.basedOnQuizzes')
basedOnQuizzesUI.innerText = quizPlayed


// update Profile functionality
let updateProfileBtn = document.querySelector('#updateProfile')
let updateProfileUI = document.querySelector('.profileModalOverlay')
let updateModalCancelBtn = document.querySelector('.modalBtns .cancelBtn')
let updateModalSaveBtn = document.querySelector('.modalBtns .saveBtn')
const profilePicInput = document.querySelector('#profilePic')
const profilePreview = document.querySelector('#profilePreview')
let updatefirstName = document.querySelector('#updatefirstName')
let updatelastName = document.querySelector('#updatelastName')

updateProfileBtn.addEventListener('click', () => {
    updateProfileUI.style.display = 'flex'
    sidebar.classList.remove('active')
    overlay.classList.remove('active')

    updateModalCancelBtn.addEventListener('click', () => {
        updateProfileUI.style.display = 'none'
    })
})

profilePicInput.addEventListener('change', () => {
    const file = profilePicInput.files[0]


         profilePreview.src = URL.createObjectURL(file)
     
    
})
updateModalSaveBtn.addEventListener('click', async () => {

    let updatedfirstName = updatefirstName.value.trim() || firstName
    let updatedlastName = updatelastName.value.trim() || lastName


  let imgUrl = userData.profilePic || ''

  if (profilePicInput.files[0]) {
    const formData = new FormData()
    formData.append('file', profilePicInput.files[0])
    formData.append('upload_preset', 'quizify')
    imgUrl = await uploadImg(formData)
  }

  const updatedUserData = {
    firstName: updatedfirstName,
    lastName: updatedlastName,
  }
if (imgUrl) {
  updatedUserData.profilePic = imgUrl
}


  await updateUserDetails(logginedUser, updatedUserData)

  updateProfileUI.style.display = 'none'
  setTimeout(()=>{
      window.location.reload()
  },2000)
})


//logout Functionality
let logoutBtn = document.querySelector('.logoutBtn')
logoutBtn.addEventListener('click', logout)

//categories & sub-categories Display
quizCategories.forEach((cat) => {
    let btn = document.createElement('button')
    btn.className = 'category'
    btn.innerText = cat.title

    btn.addEventListener('click', () => {
        subCategoriesContainer.innerHTML = ''
        cardsContainer.innerHTML = ''
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
function showCards(sub) {
    cardsContainer.innerHTML = ''
    let cards = quizCards[sub]
    console.log(cards)
    cards.map(card => {
        cardsContainer.innerHTML += `<div class="quizCard">
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


