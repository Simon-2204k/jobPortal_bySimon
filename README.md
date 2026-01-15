# 💼 JobPortal - Full Stack Job Search & Recruitment Platform

A modern, full-stack MERN (MongoDB, Express, React, Node.js) web application designed for job seekers to discover and apply for dream jobs, and for recruiters to manage company profiles, post job openings, and track candidate applications.

![JobPortal Banner](frontend/public/job-logo.svg)

---

## ✨ Features

### 🔍 For Job Seekers (Students / Candidates)
- **Comprehensive Job Search**: Search through 100+ job openings using keyword search, job title, and description matching.
- **Dynamic Filters**: Filter jobs by **Location** (Delhi NCR, Bangalore, Hyderabad, Pune, Mumbai), **Industry/Role** (Frontend, Backend, FullStack), and **Salary** range.
- **Detailed Job View**: View job descriptions, qualifications, positions, and company profiles.
- **One-Click Application**: Save and submit applications with uploaded resumes.
- **Profile Management**: Update bio, skills, resume link, and profile photo.

### 🏢 For Recruiters (Admins)
- **Company Management**: Register and update company details, logo, description, and website.
- **Post Job Openings**: Create new job postings with detailed requirements, salary, experience level, and open positions.
- **Application Tracking**: View applicant lists for each posted job and manage application statuses (Accepted / Rejected).

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) + [Redux Persist](https://github.com/rt2zz/redux-persist)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [Radix UI](https://www.radix-ui.com/) + [Shadcn UI](https://ui.shadcn.com/)
- **Icons & Animations**: [Lucide React](https://lucide.dev/) + [Framer Motion](https://www.framer.com/motion/)
- **HTTP Client**: [Axios](https://axios-http.com/)

### Backend
- **Runtime & Server**: [Node.js](https://nodejs.org/) + [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) + [Mongoose ORM](https://mongoosejs.com/)
- **Authentication**: JSON Web Tokens ([JWT](https://jwt.io/)) with HTTP-Only Cookies
- **File Uploads**: [Multer](https://github.com/expressjs/multer) + [Cloudinary](https://cloudinary.com/)
- **Security & Utilities**: `bcryptjs`, `cookie-parser`, `cors`, `dotenv`

---

## 📁 Project Structure

```text
jobPortal/
├── backend/
│   ├── controllers/      # Express route logic (user, company, job, application)
│   ├── middlewares/      # Authentication & file upload middlewares
│   ├── models/           # Mongoose schemas (User, Company, Job, Application)
│   ├── routes/           # REST API routes
│   ├── utils/            # Database connection & Cloudinary setup
│   ├── .env              # Backend environment variables
│   ├── index.js          # Main Express server entry point
│   ├── seed.js           # Database seeding script (100 sample jobs)
│   └── package.json
│
├── frontend/
│   ├── public/           # Static assets & brand logo
│   ├── src/
│   │   ├── components/   # React components & UI elements
│   │   ├── hooks/        # Custom data fetching hooks
│   │   ├── redux/        # Redux slices & store configuration
│   │   └── utils/        # Axios constants & endpoints
│   ├── index.html        # HTML entry template
│   ├── vite.config.js    # Vite configuration
│   └── package.json
└── README.md
```

---

## 🚀 Quick Start Guide

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) installed and running locally on `mongodb://localhost:27017`

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` directory:
```env
PORT=8000
MONGO_URI=mongodb://localhost:27017/jobportal
SECRET_KEY=your_secret_jwt_key
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
```


Start the backend server:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
cmd /c "npm run dev"
```

Open your browser at `http://localhost:5176` (or `http://localhost:5173`).

---

## 👤 Sample Recruiter Credentials
- **Email**: `recruiter@example.com`
- **Password**: `password123`

---

## 📄 License
This project is licensed under the [ISC License](LICENSE).
