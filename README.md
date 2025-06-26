# 🛍️ CaptureMart - Full Stack E-commerce Website

An advanced MERN stack e-commerce platform where users can explore products, add to cart, register/login (with Google support), and admins can manage orders, products, and payment methods.

🌐 **Live Demo**: [https://moizkiecommerce.vercel.app/](https://moizkiecommerce.vercel.app/)


---

## 🚀 Tech Stack

### 💻 Frontend
- React.js
- React Router DOM
- Context API
- React Toastify

### 🔧 Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Token (JWT)
- bcryptjs for password hashing

### ☁️ Deployment
- Frontend: **Vercel**
- Backend: **Vercel Serverless**
- Database: **MongoDB Atlas**

---

## 📋 Features

### 🛒 User Features
- Browse products by categories
- Add to cart & checkout
- Register/Login (with email or Google)
- View order history
- Mobile-responsive design

### 🛠️ Admin Features
- Dashboard with stats
- Add/Edit/Delete products
- Manage categories
- Manage orders
- Add payment methods (e.g. PayPal, Cash on Delivery)
- View customer reviews

---

## 📦 Installation (Local Setup)

```bash
# Clone the repo
https://github.com/moizayub1255/MERN-E-commerce.git

# Backend setup
cd backend
npm install
npm run dev

# Frontend setup
cd client
npm install
npm run dev

backend .env
PORT= 
DEV_MODE =
MONGO_URL = 
JWT_SECRET = 
BRAINTREE_MERCHANT_ID = 
BRAINTREE_PUBLIC_KEY = 
BRAINTREE_PRIVATE_KEY = 

frontend .env
REACT_APP_API_URL= 


POST   /api/v1/auth/register
POST   /api/v1/auth/login
GET    /api/v1/products
GET    /api/v1/categories
POST   /api/v1/orders

✍️ Author
👨‍💻 Developed by Moiz Ayub
📧 moizayub1255@gmail.com
📱 WhatsApp
