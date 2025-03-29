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
   <code>git clone https://github.com/username/repo.git</code>
   
3. Navigate into the repo and install dependencies:
   <code>
         cd booking_page
         npm install
         npm install react-i18next axios
   </code>

4. Navigate into the `client` folder and start the app:
   <code>
         cd client
         npm start
   </code> 

You should see the app open in your browser.

---

### 🖥️ Backend Setup
1. Navigate to your `backend/` directory.
2. Clone the backend repo:
   <code>git clone https://github.com/BeckyLashua/appt-app.git</code>

3. Navigate into the backend folder:
   <code>
      cd appt-app
      npm install node
      npm install
      npm install moment
   </code>

4. Navigate to the src/ folder and run the server:
   <code>
      cd src
      node server.js
   </code>

---

### 🗃️ Database Setup
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

---

🙋‍♀️ Author
Rebecca Lashua
GitHub: @BeckyLashua
