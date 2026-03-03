# 🏥 Online Doctor Appointment Booking System

A full-featured web application that allows patients to book doctor appointments online, doctors to manage their schedules and reports, and laboratories to send reports directly to clients.

---

## 📌 Project Overview

This project is a **web-based Online Doctor Appointment Booking System** built using **HTML, CSS, JavaScript, and PHP** with a **MySQL** database backend. It provides a seamless interface for patients, doctors, and laboratory staff.

> **From this website, a client or patient can book their appointment online. Doctors can manage appointment scheduling, reporting, etc. While Laboratory can send their report directly to the client.**

---

## 🚀 Features

### 👤 Patient / Client
- Register and log in securely
- Search for doctors by specialization
- Book, reschedule, or cancel appointments
- View appointment history
- Receive lab reports directly

### 🩺 Doctor
- Manage appointment schedules
- View patient details and history
- Generate and manage medical reports
- Update availability and profile

### 🔬 Laboratory
- Upload and send test reports directly to patients
- Manage lab report submissions

### 🔐 Admin
- Manage users (patients, doctors, lab staff)
- Oversee all appointments and reports
- System configuration and monitoring

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| HTML5 | Structure and layout |
| CSS3 | Styling and responsive design |
| JavaScript | Frontend interactivity |
| PHP | Server-side logic |
| MySQL | Database management |

---

## 📁 Project Structure

```
Online-Doctor-Appointment-Booking/
├── index.html          # Home / Landing page
├── app.html            # Main SPA entry point
├── app.css             # Premium dark-theme stylesheet
├── app.js              # Full SPA logic (auth, routing, localStorage)
├── de (1).sql          # MySQL database dump with all tables and seed data
├── laboratory/         # Laboratory module (upload_report.php, etc.)
├── LICENSE             # MIT License
└── README.md           # Project documentation
```

---

## ⚙️ Installation & Setup

### Prerequisites
- PHP 7.4 or higher
- MySQL 5.7 or higher
- XAMPP / WAMP / LAMP stack (or any web server)

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/krupakarunakarneelam-eng/doctor_-appointment.git
   ```

2. **Move to your server's root directory**
   ```bash
   # For XAMPP on Windows
   cp -r doctor_-appointment C:/xampp/htdocs/
   ```

3. **Import the database**
   - Open **phpMyAdmin**
   - Create a new database (e.g., `doctor_appointment`)
   - Import `de (1).sql` into the database

4. **Configure database connection**
   - Open the PHP config file and update:
     ```php
     $host = 'localhost';
     $dbname = 'doctor_appointment';
     $username = 'root';
     $password = '';
     ```

5. **Run the application**
   - Open your browser and go to: `http://localhost/doctor_-appointment/index.html`

---

## 📷 Screenshots

> The application features a **premium dark-themed SPA** interface with modern design aesthetics, smooth animations, and a fully responsive layout.

---

## 🔒 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Krupa Karunakar Neelam**
- GitHub: [@krupakarunakarneelam-eng](https://github.com/krupakarunakarneelam-eng)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check the [issues page](https://github.com/krupakarunakarneelam-eng/doctor_-appointment/issues).

---

*Made with ❤️ for better healthcare accessibility*
