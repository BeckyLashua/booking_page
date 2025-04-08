# Bilingual Appointment Scheduler (v1.0)

--- 
A bilingual (English/Spanish) full-stack appointment scheduling web application designed for small businesses serving Spanish-speaking clients. Clients and staff can book, view, reschedule, or cancel appointments, with safeguards against double bookings and past-dated entries.

---

### 👩‍💻 Author

**Rebecca Lashua**  
📧 [beckylashua@gmail.com](mailto:beckylashua@gmail.com)  
🌐 [beckylashua.com](https://beckylashua.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/rebecca-lashua-a75096231/)  
🐙 [GitHub](https://github.com/BeckyLashua)

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

### 🔧 Setup Steps

#### Clone the Repository
   git clone https://github.com/your-username/booking-page.git
   cd booking-page

---

#### 📦 Frontend Setup
#### Install Frontend Dependencies
      cd frontend
      npm install
      npm install react-i18next axios
#### To run the frontend:
      npm start

---

#### 🖥️ Backend Setup
#### Install Backend Dependencies
      cd backend
      npm install
      npm install moment
#### Open a new terminal tab:
      cd backend
      npm install
      npm install moment
#### Start the server:
      node src/server.js

---

#### 🗃️ Database Setup
Download MariaDB and install for your OS.

During setup, save your:

1. port number
2. username (e.g. root)
3. password
4. host (usually localhost)

In your project, open db.js and update the initializeDatabase() function with your credentials.

Start your MariaDB service, log in via terminal or GUI, and create the schema:

<code>USE booking_system;</code>

Make sure your database is running before testing the frontend/backend.


---


### 📌 Routes Overview
| Route                          | Description                         | Component Rendered            |
|-------------------------------|-------------------------------------|-------------------------------|
| `/`                            | Home page                           | `HomePage`                    |
| `/book`                        | Booking form                        | `BookingPage`                 |
| `/confirmation`               | Booking confirmation message        | `ConfirmationPage`           |
| `/reschedule/:id`            | Reschedule form for an appointment  | `ReschedulePage`             |
| `/reschedule-confirmation`   | Reschedule confirmation             | `RescheduleConfirmation`     |
| `/cancel`                    | Cancel confirmation                 | `CancelConfirmation`         |
| `/appointments`              | View booked appointments            | `AppointmentsPage`           |
| `/search`                    | Appointment search form             | `SearchPage`                 |
| `/error`                     | Error page                          | `ErrorPage`                  |

