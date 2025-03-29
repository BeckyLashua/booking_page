# Appointment Scheduler (v1.0)

A bilingual (English/Spanish) full-stack appointment scheduling web application designed for small businesses serving Spanish-speaking clients. Clients and staff can book, view, reschedule, or cancel appointments, with safeguards against double bookings and past-dated entries.

---

## 🚀 Features

- Book new appointments with form validation
- Search and view scheduled appointments by email
- Reschedule or cancel existing appointments
- Toggle full UI between English and Spanish
- Prevents duplicate or past-dated bookings
- Clear feedback messages for confirmations or errors

---

## 🛠️ Tech Stack

### Frontend
- React.js
- HTML5 / CSS3 / JavaScript
- Axios
- react-i18next (for translation support)

### Backend
- Node.js
- Express.js
- MariaDB (relational database)
- Moment.js (for date/time handling)

### Tools
- VS Code
- Postman (API testing)
- pgAdmin / MySQL Workbench (optional GUI for DB)
- React Testing Library / Jest
- Git & GitHub

---

## 📁 Directory Structure
project-root/ │ ├── backend/ │ ├── appt-app/ # Node/Express backend server │ └── database/ # MariaDB connection and db.js │ ├── frontend/ │ └── booking_page/ # React frontend client │ └── client/ # Entry point for React app


---

## 🧩 Installation & Setup

### Prerequisites
- [Node.js](https://nodejs.org/)
- [MariaDB](https://mariadb.org/download/)
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/) (recommended)

---

### 📦 Frontend Setup

1. Open terminal and navigate to your `frontend/` directory.
2. Clone the frontend repo:
   ```bash
   git clone https://github.com/BeckyLashua/booking_page.git


cd booking_page
npm install
npm install react-i18next axios

cd client
npm start

### 🖥️ Backend Setup
Navigate to your backend/ directory.
Clone the backend repo:

git clone https://github.com/BeckyLashua/appt-app.git

Navigate into the backend folder:

cd appt-app
npm install node
npm install
npm install moment

Navigate to the src/ folder and run the server:

cd src
node server.js

### 🗃️ Database Setup
Download MariaDB and install for your OS.

During setup, save your:

port number
username (e.g. root)
password
host (usually localhost)

In your project, open db.js and update the initializeDatabase() function with your credentials.

Start your MariaDB service, log in via terminal or GUI, and create the schema:

USE booking_system;

Make sure your database is running before testing the frontend/backend.

🙋‍♀️ Author
Rebecca Lashua
GitHub: @BeckyLashua
