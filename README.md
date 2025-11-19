# 🍽️ Foodify – MERN Food Ordering Platform

## 🚀 Overview  
Foodify is a production-grade **MERN stack food reels system** . It integrates **ImageKit** for image management and ships with both **User** and **Food-Partner** workflows.

---

# 🧩 Tech Stack  
## 🎨 Frontend (React + Vite)
- React 18  
- Vite  
- Context API  
- Axios  
- Responsive UI  

## ⚙️ Backend (Node + Express)
- Express.js REST API  
- JWT Authentication  
- MongoDB + Mongoose  
- Role-based access  
- Multer (file handling)  
- ImageKit Node SDK  

## ☁️ Integrations
- ImageKit.io (CDN + optimization)  
- Environment-driven config via `.env`  

---

# 📁 Project Structure
Foodify/
│
├── Backend/
│ ├── server.js
│ ├── controllers/
│ ├── routes/
│ ├── models/
│ ├── middleware/
│ ├── package.json
│ └── .env (ignored)
│
├── Frontend/
│ └── Foodify/
│ ├── src/
│ ├── public/
│ ├── package.json
│ └── vite.config.js
│
└── README.md


# ⚙️ Backend Setup  
```bash
cd Backend
npm install
Create .env inside Backend:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

IMAGEKIT_PUBLIC=your_public_key
IMAGEKIT_PRIVATE=your_private_key
IMAGEKIT_URL=https://ik.imagekit.io/<your_id>


Run server:

npm start


Backend → http://localhost:5000

🎨 Frontend Setup
cd Frontend/Foodify
npm install


Create .env inside Frontend:

VITE_API_URL=http://localhost:5000
VITE_IMAGEKIT_URL=https://ik.imagekit.io/<your_id>


Run client:

npm run dev


Frontend → http://localhost:5173

📦 Image Upload (ImageKit)

Foodify uses ImageKit for:

File storage

CDN optimization

On-the-fly transformations

Example result URL:

https://ik.imagekit.io/<id>/food/<filename>?tr=w-600

🛡️ Security

JWT-based authentication

Protected admin routes

Sanitized payloads

.env fully excluded from repo

👤 Author

Deep (DEEP248)
Full Stack Developer
