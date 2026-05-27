# CareStack 🏥  
### Full Stack Doctor Appointment Booking System  

CareStack is a modern full-stack healthcare appointment booking platform where patients can search doctors, book appointments, manage profiles, and make online payments.  
It also includes dedicated Admin and Doctor dashboards for complete appointment and profile management.

---

## 🚀 Live Demo

### 🌐 Frontend (Patient Website)
Frontend Live: https://care-stack-4dlp-frontend.vercel.app

### ⚙️ Backend API
Backend Live: https://care-stack-smoky.vercel.app

### 🛠️ Admin Panel
Admin Panel Live: https://carestack-admin.vercel.app

### 📂 GitHub Repository
Repository: https://github.com/mohdasad-dev/CareStack.git

---

# 📖 About CareStack

CareStack is a complete MERN Stack healthcare management system designed to simplify the process of booking doctor appointments online.

The platform provides three major modules:

- 👨‍⚕️ Patient Panel
- 🩺 Doctor Panel
- 🛠️ Admin Panel

Patients can browse doctors by specialization, book appointments, manage profiles, and pay online securely.

Doctors can manage their appointments, update availability, and maintain profile information.

Admins can manage all doctors, appointments, and monitor platform activities through an advanced dashboard.

---

# ✨ Features

## 👨‍⚕️ Patient Features

- User Registration & Login Authentication
- JWT Authentication System
- Browse Doctors by Specialization
- View Doctor Details
- Book Appointments
- Cancel Appointments
- Razorpay Online Payment Integration
- Patient Profile Management
- Update Patient Information
- View Booked Appointments
- Responsive UI for Mobile & Desktop

---

## 🩺 Doctor Features

- Doctor Dashboard
- Manage Appointments
- View Patient Booking Details
- Update Doctor Profile
- Change Availability Status
- If Doctor is Unavailable → Patients Cannot Book Appointment

---

## 🛠️ Admin Features

- Admin Authentication
- Admin Dashboard
- Add New Doctors
- Manage Doctor List
- View All Appointments
- Manage Appointments
- Monitor Latest Bookings
- Dashboard Analytics

---

# 🧠 How CareStack Works

## 1️⃣ Patient Registration & Login

Patients create an account and securely log in using JWT authentication.

---

## 2️⃣ Browse Doctors

Users can view all available doctors and filter them based on medical specialization.

---

## 3️⃣ Appointment Booking

Patients select a doctor and book an appointment for a preferred date and time.

The system checks:

- Doctor availability
- Appointment slot status
- Authentication status

before confirming booking.

---

## 4️⃣ Online Payment

Patients can pay online securely using Razorpay payment gateway integration.

---

## 5️⃣ Doctor Management

Doctors can:

- View appointments
- Update profile details
- Change availability status
- Manage patient bookings

---

## 6️⃣ Admin Management

Admins can:

- Add doctors
- Monitor all appointments
- Manage system activity
- Access analytics dashboard

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Vite
- Tailwind CSS
- Axios
- React Router DOM

---

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt.js

---

## Payment Gateway
- Razorpay

---

## Deployment
- Vercel

---

# 📁 Project Structure

```bash
CareStack/
│
├── frontend/          # Patient Website
├── admin/             # Admin Dashboard
├── backend/           # Backend API
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── pages/
│   └── App.jsx
│
├── public/
├── package.json
└── vite.config.js
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/mohdasad-dev/CareStack.git
```

---

## 2️⃣ Navigate to Project

```bash
cd CareStack
```

---

## 3️⃣ Install Dependencies

### Frontend

```bash
cd frontend
npm install
```

### Backend

```bash
cd backend
npm install
```

### Admin Panel

```bash
cd admin
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside backend folder.

```env
MONGODB_URI=your_mongodb_uri

JWT_SECRET=your_jwt_secret

ADMIN_EMAIL=your_admin_email

ADMIN_PASSWORD=your_admin_password

RAZORPAY_KEY_ID=your_razorpay_key

RAZORPAY_KEY_SECRET=your_razorpay_secret
```

---

# ▶️ Run Project

## Run Frontend

```bash
npm run dev
```

---

## Run Backend

```bash
npm run server
```

---

## Run Admin Panel

```bash
npm run dev
```

---

# 📸 Screenshots

## 🏠 Homepage
Add homepage screenshot here

```bash
/screenshots/home.png
```

---

## 🩺 Doctors Page
Add doctors page screenshot here

```bash
/screenshots/doctors.png
```

---

## 📅 Appointment Booking
Add appointment booking screenshot here

```bash
/screenshots/appointment.png
```

---

## 🛠️ Admin Dashboard
Add admin dashboard screenshot here

```bash
/screenshots/admin-dashboard.png
```

---

## 👨‍⚕️ Doctor Dashboard
Add doctor dashboard screenshot here

```bash
/screenshots/doctor-dashboard.png
```

---

# 🔒 Authentication Flow

```text
User Login/Register
        ↓
JWT Token Generated
        ↓
Token Stored in Local Storage
        ↓
Protected Routes Access
        ↓
Backend Middleware Verification
```

---

# 🌟 Future Improvements

- Video Consultation System
- Email Notifications
- Prescription Management
- Real-time Chat
- Appointment Reminder System
- Medical Reports Upload
- Dark Mode Support

---

# 👨‍💻 Author

## Md Asad

- Full Stack MERN Developer
- Passionate about Web Development & Scalable Applications

### GitHub
https://github.com/mohdasad-dev

---

# ⭐ Support

If you like this project, give it a ⭐ on GitHub and share it with others.

---

# 📜 License

This project is licensed under the MIT License.
