# JobPortal — Modern Full-Stack Job Hunt & Recruitment Platform 🚀

A feature-rich, modern MERN stack Job Portal application designed for job seekers to search, filter, and apply for jobs, and for recruiters to create companies, post jobs, and manage applicant statuses.

---

## 🌟 Key Features

### 💼 For Job Seekers
- **Job Search & Filtering**: Real-time filtering by role (Frontend, Backend, FullStack, etc.), location (Bangalore, Hyderabad, Delhi NCR, Pune, Mumbai), and salary ranges.
- **Detailed Job Descriptions**: View job expectations, required skills, salary package, experience level, and company profiles.
- **One-Click Application**: Apply directly to job postings with resume attachments and profile summaries.
- **User Profile Management**: Update personal info, bio, skills, resume uploads, and view application history.

### 🏢 For Recruiters & Employers
- **Company Management**: Register, edit, and update company branding, description, website, and logo.
- **Job Postings**: Create, edit, and manage active job listings with custom requirements and position details.
- **Applicant Tracking System (ATS)**: View candidates who applied to posted jobs, download resumes, and accept or reject applications.

---

## 🛠️ Tech Stack & Architecture

### **Frontend**
- **Framework**: React.js (Vite)
- **State Management**: Redux Toolkit & Redux Persist
- **Styling**: Tailwind CSS & Lucide Icons
- **Animations**: Framer Motion
- **HTTP Client**: Axios

### **Backend**
- **Runtime**: Node.js & Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens) & Cookie Parser
- **File Storage**: Cloudinary & Multer for profile photo & resume uploads
- **Security**: Bcrypt.js password hashing & CORS origin handling

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB running locally (`mongodb://localhost:27017`) or a MongoDB Atlas URI

### Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Simon-2204k/jobPortal_bySimon.git
   cd jobPortal_bySimon
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```
   Create a `.env` file in the `backend` directory:
   ```env
   PORT=8000
   MONGO_URI=mongodb://localhost:27017/jobportal
   SECRET_KEY=your_secret_key_here
   CLOUD_NAME=your_cloudinary_cloud_name
   API_KEY=your_cloudinary_api_key
   API_SECRET=your_cloudinary_api_secret
   ```

3. **Database Seeding (Optional)**
   Populate MongoDB with 100 sample jobs and top companies:
   ```bash
   node seed.js
   ```

4. **Run Backend Server**
   ```bash
   npm run dev
   ```

5. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

Open your browser to access the app!

---

## 📝 License
This project is open source and available under the [ISC License](LICENSE).
