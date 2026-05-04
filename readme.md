# Quizify 🚀

**Quizify** is a modern full‑stack quiz platform that lets users register, take quizzes across multiple categories, track their performance, and compete on a leaderboard. Built with a clean, responsive UI and a robust Node.js/Express backend, it showcases best‑in‑class authentication, image handling, and analytics.

---

## ✨ Features

- 🔐 **JWT‑based authentication** (signup, login, email verification, password reset)
- 📚 **Quiz system** with categories, multiple‑choice questions, and instant feedback
- 🏆 **Leaderboard** with ranking and score aggregation
- 👤 **User profiles** with avatar upload via Cloudinary
- 📈 **Quiz history** and **category‑wise performance analytics**
- 📱 **Responsive UI** – sidebar navigation on desktop, bottom navigation on mobile
- 🎨 **Smooth animations** and skeleton loaders for a premium feel

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | HTML5, CSS3 (custom + Google Fonts), Vanilla JavaScript (ES6 modules) |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB with Mongoose |
| **Auth** | JSON Web Tokens (JWT) |
| **File Storage** | Cloudinary (avatar uploads) |
| **API** | RESTful endpoints |

---

## 🌐 API Endpoints

**Base URLs**
- **Local:** `http://localhost:8000/api`
- **Production:** `https://quizify-backend-nine.vercel.app/api`

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/signup` | Register new user |
| POST | `/auth/login` | Login user and return JWT |
| POST | `/auth/verify-otp` | Verify email OTP |
| POST | `/auth/resend-otp` | Resend OTP |

### Quiz Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/quiz/categories` | Get all quiz categories |
| GET | `/quiz/cards/:subName` | Get quizzes by subcategory |
| POST | `/quiz/progress` | Save quiz progress (protected) |
| GET | `/quiz/progress` | Get user progress (protected) |


### User Data
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/users` | Get logged-in user profile |
| GET | `/users/all` | Get all users (leaderboard) |
| GET | `/users/:id` | Get specific user profile |
| PUT | `/users` | Update user profile |
| DELETE | `/users` | Delete user account |

---
## 🔐 Auth Protection

Protected routes require JWT token:

```http
Authorization: <token>
```
---
## 📦 Installation & Setup

1. **Clone the repositories**
   ```bash
   # Frontend
   git clone https://github.com/AhmedRaza186/Quizify.git
   # Backend
   git clone https://github.com/AhmedRaza186/Quizify-Backend.git
   ```
2. **Backend setup**
   ```bash
   cd Quizify-Backend
   npm install
   cp .env.example .env   # set MONGODB_URI, JWT_SECRET, CLOUDINARY_* variables
   npm run dev   # starts server on http://localhost:8000
   ```
3. **Frontend setup**
   ```bash
   cd Quizify
   # No npm dependencies – just open the site
   # If you prefer a dev server:
   npx http-server . -p 3000
   ```
4. **Configure Cloudinary** – add your upload preset and cloud name in `cloudinary.js`.
5. Open `quizApp/index.html` in the browser (or visit `http://localhost:3000`) and start exploring.

---

## 📈 Future Improvements

- 🎧 Add sound effects for quiz interactions
- ⏱️ Implement timed quizzes with scoring multipliers
- 🔔 Real‑time notifications (WebSocket) for new challenges
- 📊 Advanced analytics dashboard for admin users
- 🌙 Dark‑mode toggle
- 🧪 Comprehensive unit & integration test suite (Jest, Cypress)

---

## 👤 Author

**Ahmed Raza** – Full‑stack developer passionate about creating engaging web experiences. Connect on [GitHub](https://github.com/AhmedRaza186).

---

## 📄 License

This project is intended for **educational and portfolio purposes**. Feel free to fork, modify, and showcase it, but do not use it for commercial production without proper licensing.
