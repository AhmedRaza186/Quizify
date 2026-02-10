//imports
import { uploadImg } from "../cloudinary.js"
import { updateUserDetails, getLoggedInUser, getUserDetails, logout, fetchCategories, getQuizCardsBySub, getUserProgressBySub } from "../firebase.js"
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



// AVG progress bar 
function updateUserStats(data) {
    const progressText = document.querySelector('.scoreText h2');
    const progressFill = document.querySelector('.progressFill');
    const quizCountUI = document.querySelector('.basedOnQuizzes');

    if (progressText && progressFill) {
        const userProgress = data.progress || 0;
        progressText.innerText = `${userProgress}%`;
        progressFill.style.width = `${userProgress}%`;
    }

    if (quizCountUI) {
        // We use data.quizPlayed because 'quizPlayed' as a standalone variable is gone
        quizCountUI.innerText = data.quizPlayed || 0;
    }
}


updateUserStats(userData); // This one line handles everything above!



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
        sidebar.classList.add('active')
        overlay.classList.add('active')
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
    setTimeout(() => {
        window.location.reload()
    }, 2000)
})


//logout Functionality
let logoutBtn = document.querySelector('.logoutBtn')
logoutBtn.addEventListener('click', logout)



//categories & sub-categories Display

async function loadCategories() {
    let categories = await fetchCategories()

    categories.forEach((cat) => {
        let btn = document.createElement('button');
        btn.className = 'category';
        btn.innerText = cat.title;

        btn.onclick = () => {
            subCategoriesContainer.innerHTML = '';
            cardsContainer.innerHTML = '';

            // If no subcategories, show coming soon
            if (!cat.subCategories) {
                subCategoriesContainer.innerHTML = `<p style="color: gray">Coming soon...</p>`;
                return;
            }

            // Create Sub Buttons
            cat.subCategories.forEach((sub, i) => {
                let subBtn = document.createElement('button');
                subBtn.className = 'subCategory';
                subBtn.innerText = sub;

                // When sub-button clicked, fetch and show cards
                subBtn.addEventListener('click', async () => {
                    // 1. Fetch Master Cards
                    let cards = await getQuizCardsBySub(sub);

                    // 2. Fetch User's Personal Progress
                    // 'logginedUser' is already defined at the top of your app.js
                    let userProgress = await getUserProgressBySub(logginedUser, sub);

                    // 3. Merge: Add user-specific status to the master card object
                    const mergedCards = cards.map(card => {
                        const progress = userProgress[String(card.order)];
                        return {
                            ...card,
                            // Use user progress if it exists, otherwise default to false/0
                            quizCompleted: progress ? progress.isCompleted : false,
                            percentage: progress ? progress.percentage : 0
                        };
                    });

                    showCards(mergedCards, sub);
                });
                subCategoriesContainer.appendChild(subBtn);
                if (i === 0) subBtn.click();
            });
        };
        categoriesContainer.appendChild(btn);
    });
}


//Cards Display
function showCards(cards, sub) {
    cardsContainer.innerHTML = ''

    console.log(cards)
    cards.map(card => {
        // 1. Determine the status based on percentage
        const isFailed = card.quizCompleted && card.percentage < 40;
        const isMastered = card.quizCompleted && card.percentage >= 40;

        // 2. Dynamic Classes and Colors
        const statusClass = card.quizCompleted ? 'completed' : '';
        const accentColor = isFailed ? '#ef4444' : (isMastered ? '#10b981' : 'var(--accent)');
        const badgeLabel = isFailed ? '✕ Failed' : '✓ Mastered';
        console.log(sub)
        console.log(card)
        console.log(card.order)
        cardsContainer.innerHTML += `
            <div class="quizCard ${statusClass}" data-sub="${sub}" data-id="${card.order}">
                <div class="card-image-wrapper">
                    <img src="${card.img}" alt="${card.title}">
                    ${card.quizCompleted ? `<span class="status-badge" style="background: ${accentColor}">${badgeLabel}</span>` : ''}
                </div>
                
                <div class="cardBody">
                    <div class="card-header">
                        <h3>${card.title}</h3>
                        <span class="percentage-text" style="color: ${accentColor}">${card.percentage ? card.percentage : 0}%</span>
                    </div>

                    <div class="card-progress-track">
                        <div class="card-progress-fill" style="width: ${card.percentage ? card.percentage : 0}%; background: ${accentColor}"></div>
                    </div>

                    <div class="cardMeta">
                        <span class="level">${card.level}</span>
                        <span class="questions">questions:${card.questions}</span>
                    </div>

                    <button class="startBtn" ${card.quizCompleted ? 'disabled' : ''}>
                        ${card.quizCompleted ? 'Review Result' : 'Start Quiz'}
                    </button>
                </div>
            </div>`;
    })
}
loadCategories()

// start Quiz Functionality
cardsContainer.addEventListener('click', (e) => {
    const startBtn = e.target.closest('.startBtn');

    // If the click wasn't on a start button, or the button is disabled, stop
    if (!startBtn || startBtn.hasAttribute('disabled')) return;

    // Get the data we need from the parent card
    const card = startBtn.closest('.quizCard');
    const subName = card.dataset.sub; // We need to add this attribute in showCards
    const quizId = card.dataset.id;   // We need to add this attribute in showCards

    // Redirect to your quiz page with parameters
    console.log(subName)
    console.log(quizId)
    console.log(card)
    const encodedSub = encodeURIComponent(subName);
    window.location.href = `./quizPage/quizpage.html?sub=${encodedSub}&id=${quizId}`;
});

