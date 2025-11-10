# 🔐 Secure Notes

A fullstack web app built with **Django REST Framework** and **React (Vite)** to master **JWT Authentication**.  
This project implements secure user registration, login, token refresh, and CRUD operations on private notes — protected by JSON Web Tokens.

---

## 🚀 Overview

**Secure Notes** is a simple yet powerful fullstack app designed to demonstrate how JWT authentication works in a real-world setting.  
It features a **Django REST backend** for APIs and a **React frontend** for client-side rendering.  

Users can:
- Register & log in securely
- Create, view, and delete notes
- Stay authenticated using JWT access & refresh tokens

This project helped me fully understand **token-based authentication**, **DRF views**, and **frontend-backend integration** in modern web apps.

---

## 🧠 What I Learned

✅ Implementing JWT Authentication using `djangorestframework-simplejwt`  
✅ Protecting API endpoints with authentication & permissions  
✅ Token refresh and expiration handling  
✅ Cross-Origin setup between Django & React (CORS)  
✅ Full CRUD operations through RESTful endpoints  
✅ React integration with a Django backend (client-side rendering)  
✅ Environment variables & secure database configs  

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|-------------|
| **Backend** | Django 4.2, Django REST Framework, SimpleJWT |
| **Frontend** | React (Vite) |
| **Database** | MySQL |
| **Auth** | JSON Web Tokens (Access + Refresh) |
| **Permissions** | DRF’s `IsAuthenticated` & `AllowAny` |
| **Hosting Ready** | CORS enabled for React integration |

---

## ⚙️ Backend Structure

backend/
├── backend/ # Main Django project
│ ├── settings.py
│ ├── urls.py
│ └── wsgi.py
│
├── core/ # App handling JWT and Notes logic
│ ├── models.py # Note model (linked to User)
│ ├── views.py # API views for registration & notes
│ ├── serializers.py # Serializers for User & Note
│ └── urls.py
│
└── manage.py


---

## 🖥️ Frontend Structure

frontend/
├── src/
│ ├── components/
│ ├── pages/
│ ├── services/ # Handles API requests with JWT headers
│ └── App.jsx
└── vite.config.js



Built using **React + Vite**, the frontend consumes Django’s REST API, handles login tokens in localStorage, and refreshes them as needed.

---

## 🛠️ Setup Instructions



```bash
# 1️⃣ Clone the repository
git clone https://github.com/alirzglshn/secure-notes.git
cd secure-notes

# 2️⃣ Set up and activate a Python virtual environment
cd backend
python3 -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate

# 3️⃣ Install backend dependencies
pip install -r requirements.txt

# 4️⃣ Configure environment variables (.env)
# Make sure to create a .env file inside /backend with:
# DB_NAME=your_db_name
# DB_USER=your_user
# DB_PWD=your_password
# DB_HOST=127.0.0.1
# DB_PORT=3306

# 5️⃣ Run migrations
python manage.py migrate

# 6️⃣ Start the Django server
python manage.py runserver

# 7️⃣ Now start the React frontend
cd ../frontend
npm install
npm run dev

# 8️⃣ Visit the app in your browser
# 👉 http://localhost:5173/


## 🔐 Core Features

- 🔑 **JWT Authentication** (Access + Refresh tokens)
- 🧍‍♂️ **User registration & login**
- 🗒️ **Create, view, and delete notes**
- 🔄 **Token refresh endpoint**
- 🧱 **Permission-based API protection**
- 🌍 **Full React integration via CORS**
- 💬 **Clean, modular Django REST setup**

---

## 🧩 API Endpoints (for reference)

| Method | Endpoint | Description |
|:-------|:----------|:-------------|
| **POST** | `/core/user/register/` | Register new user |
| **POST** | `/api-token/` | Get JWT token pair |
| **POST** | `/api/token/refresh/` | Refresh JWT tokens |
| **GET** | `/core/notes/` | List user notes |
| **POST** | `/core/notes/` | Create a note |
| **DELETE** | `/core/notes/delete/<id>/` | Delete a note |

---

## 👨‍💻 Author

**Alireza Golshan**  
💼 Computer Science Student | Django & React Developer  
🐍 Passionate about Backend Logic & API Security  
🔗 [GitHub](https://github.com/alirzglshn) • [LinkedIn](https://www.linkedin.com/in/alirzglshn/)

---

## 🧭 Future Improvements

- 🔐 Implement password reset & profile management  
- 🌓 Add dark mode to frontend  
- 🐳 Deploy with Docker (fullstack setup)  
- ♻️ Integrate refresh tokens seamlessly with React interceptors  
  
- 🐳 Deploy with Docker (fullstack setup)  
- ♻️ Integrate refresh tokens seamlessly with React interceptors  
