const API_URL = window.location.hostname === "localhost"
  ? "http://localhost:8000/api/auth"
  : "https://quizify-backend-nine.vercel.app/api/auth";


// DOM elements
const submitBtn = document.querySelector('#form-submit');
const errorText = document.querySelector('#errorText');
const body = document.querySelector('body');
const inputs = document.querySelectorAll('.input-group input');
const togglePassword = document.querySelector('#togglePassword');
const passwordInput = document.querySelector('#password');

// OTP Elements
const signupContainer = document.querySelector('.signup-container');
const loginContainer = document.querySelector('.login-container');
const otpSection = document.querySelector('.otp-section');
const otpSubmitBtn = document.querySelector('#otp-submit');
const otpInputs = document.querySelectorAll('.otp-box');
const resendCodeBtn = document.querySelector('#resendCode');
const otpCountdownContainer = document.querySelector('#otpCountdown');
const timerDisplay = document.querySelector('#timer');
const backToLoginBtn = document.querySelector('#backToLogin');

let timerInterval;

// Check if user is already logged in
const storedToken = localStorage.getItem('Quizify-token');
if (storedToken) {
    window.location.href = '../quizApp/index.html';
}

// Toast Notification System
function showToast(message, type = 'error') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    const icon = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';

    toast.innerHTML = `
        <i class="fas ${icon}"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-20px)';
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

function throwError(error) {
    if (!errorText) return;
    errorText.style.display = 'block';
    errorText.innerText = error;
    setTimeout(() => {
        errorText.style.display = 'none';
        errorText.innerText = '';
    }, 2500);
}

// Password visibility toggle
if (togglePassword) {
    togglePassword.addEventListener('click', function () {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.style.color = type === 'text' ? 'var(--primary)' : 'var(--text-secondary)';
    });
}

// Global Enter key support
body.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const activeSection = [signupContainer, loginContainer].find(s => s && s.style.display !== 'none');
        if (activeSection) {
            submitBtn.click();
        } else if (otpSection && otpSection.style.display !== 'none') {
            otpSubmitBtn.click();
        }
    }
});

// --- LOGIN LOGIC ---
async function handleLogin() {
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');

    if (!emailInput.value || !passwordInput.value) {
        showToast('All fields are required');
        return;
    }

    try {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: emailInput.value, password: passwordInput.value })
        });

        const data = await response.json();
        console.log(data);

        if (!response.ok || !data.status) {
            if (data.message === 'Please verify your email first') {
                showToast(data.message, 'error');
                setTimeout(() => {
                    otpPageHandler(emailInput.value);
                }, 1500);
                return;
            }
            throw new Error(data.message || 'Login failed');
        }

        localStorage.setItem('Quizify-token', data.token);
        localStorage.setItem('Quizify-user', JSON.stringify(data.user));

        showToast('Login successful!', 'success');
        setTimeout(() => {
            window.location.href = '../quizApp/index.html';
        }, 1500);
    } catch (error) {
        showToast(error.message);
    }
}

// --- SIGNUP LOGIC ---
function validateSignupData(firstName, lastName, email, password, confirmPass) {
    if (!firstName.value || !lastName.value || !email.value || !password.value || !confirmPass.value) {
        showToast('All fields are required');
        return false;
    }
    if (password.value.length < 8) {
        showToast('Password must contain at least 8 characters');
        return false;
    }
    if (confirmPass.value !== password.value) {
        showToast('Passwords do not match');
        return false;
    }
    return true;
}

async function handleSignup() {
    const firstName = document.querySelector('#firstName');
    const lastName = document.querySelector('#lastName');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const confirmPass = document.querySelector('#confirmPass');

    if (!validateSignupData(firstName, lastName, email, password, confirmPass)) {
        return;
    }

    try {
        const response = await fetch(`${API_URL}/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstName: firstName.value,
                lastName: lastName.value,
                email: email.value,
                password: password.value
            })
        });

        const data = await response.json();
        console.log(data);

        if (!response.ok || !data.status) {
            throw new Error(data.message || 'Signup failed');
        }

        showToast('Account created! Please verify your email.', 'success');
        setTimeout(() => {
            otpPageHandler(email.value);
        }, 1500);
    } catch (error) {
        showToast(error.message);
    }
}

// --- OTP LOGIC ---
function otpPageHandler(email) {
    if (signupContainer) signupContainer.style.display = 'none';
    if (loginContainer) loginContainer.style.display = 'none';
    if (otpSection) otpSection.style.display = 'flex';

    startCountdown(60);

    otpInputs.forEach((input, index) => {
        input.addEventListener('input', (e) => {
            input.value = input.value.replace(/[^0-9]/g, '');
            if (input.value.length === 1 && otpInputs[index + 1]) {
                otpInputs[index + 1].focus();
            }
            checkAllOtpFilled();
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && !input.value && otpInputs[index - 1]) {
                otpInputs[index - 1].focus();
            }
        });

        input.addEventListener('paste', (e) => {
            const data = e.clipboardData.getData('text').split('');
            otpInputs.forEach((inp, i) => {
                inp.value = data[i] || '';
            });
            otpInputs[Math.min(data.length, otpInputs.length) - 1].focus();
            checkAllOtpFilled();
            e.preventDefault();
        });
    });
}

function checkAllOtpFilled() {
    const otp = Array.from(otpInputs).map(i => i.value).join('');
    if (otp.length === 6) {
        setTimeout(() => otpSubmitBtn.click(), 500);
    }
}

async function verifyOtp(email) {
    console.log('click hua');
    let otp = []
    otpInputs.forEach(input => {
        otp.push(input.value)
    });
    otp = +(otp.join(''))

    try {
        const otpVerificationApi = await fetch(`${API_URL}/verify-otp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email, otp: otp })
        })

        const otpVerificationResponse = await otpVerificationApi.json()
        console.log(otpVerificationResponse);

        if (!otpVerificationApi.ok || !otpVerificationResponse.status) {
            showToast(otpVerificationResponse.message || 'OTP verification failed', 'error');
            return;
        }

        showToast('Account verified successfully \n Now Login', 'success');
        setTimeout(() => {
            window.location.href = './login.html';
        }, 1200);
    } catch (error) {
        showToast('OTP verification failed. Please try again later' + error.message, 'error')
    }
}

async function handleResendOtp(email) {
    try {
        const response = await fetch(`${API_URL}/resend-otp`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        });

        const data = await response.json();

        if (!response.ok || !data.status) {
            throw new Error(data.message || 'Failed to resend OTP');
        }

        showToast('New OTP sent to your email', 'success');
        startCountdown(60);
    } catch (error) {
        showToast(error.message);
    }
}

function startCountdown(duration) {
    clearInterval(timerInterval);
    let timer = duration;
    otpCountdownContainer.style.display = 'inline';
    resendCodeBtn.style.pointerEvents = 'none';
    resendCodeBtn.style.opacity = '0.5';

    const updateTimer = () => {
        let minutes = Math.floor(timer / 60);
        let seconds = timer % 60;
        timerDisplay.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (--timer < 0) {
            clearInterval(timerInterval);
            otpCountdownContainer.style.display = 'none';
            resendCodeBtn.style.pointerEvents = 'auto';
            resendCodeBtn.style.opacity = '1';
        }
    };

    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);
}

// --- INITIALIZATION ---
if (submitBtn) {
    submitBtn.addEventListener('click', event => {
        event.preventDefault();
        if (signupContainer) {
            handleSignup();
        } else {
            handleLogin();
        }
    });
}

if (otpSubmitBtn) {
    otpSubmitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const email = document.querySelector('#email').value;
        verifyOtp(email);
    });
}

if (resendCodeBtn) {
    resendCodeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const email = document.querySelector('#email').value;
        handleResendOtp(email);
    });
}

if (backToLoginBtn) {
    backToLoginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        otpSection.style.display = 'none';
        loginContainer.style.display = 'flex';
    });
}
