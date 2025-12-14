# Sweet Shop Management System 🍬

A full-stack web application designed to digitize the operations of a traditional Sweet Shop. This system allows customers to browse and order sweets while enabling administrators to manage inventory and view orders in real-time.

## 📖 Table of Contents
- [Problem Statement](#-problem-statement)
- [Objectives](#-objectives)
- [Technologies Used](#-technologies-used)
- [Features](#-features)
- [Folder Structure](#-folder-structure)
- [Installation & Setup](#-installation--setup)
- [Common Errors & Solutions](#-common-errors--solutions)
- [Future Scope](#-future-scope)

---

## 🚩 Problem Statement
Traditional sweet shops often rely on manual methods for billing and inventory management. This leads to:
1.  **Calculation Errors:** Manual billing is prone to mistakes.
2.  **Inventory Issues:** Shop owners don't know when stock runs low.
3.  **Slow Service:** Physical queues and manual order taking consume time.
4.  **No Digital Presence:** Customers cannot view the catalog remotely.

## 🎯 Objectives
* To develop a user-friendly frontend for customers to browse sweets by category.
* To implement a Shopping Cart system with automatic total calculation.
* To provide an Admin Dashboard for adding new products dynamically.
* To establish a Backend API that serves real-time data to the frontend.
* To eliminate manual paperwork and improve shop efficiency.

---

## 💻 Technologies Used

### **Frontend (Client-Side)**
* **React.js (Vite):** For building a fast and interactive user interface.
* **CSS3:** For responsive and modern styling.
* **Lucide-React:** For modern icons (Cart, Admin, Search).

### **Backend (Server-Side)**
* **Node.js:** Runtime environment for executing JavaScript on the server.
* **Express.js:** Framework for building RESTful APIs.
* **CORS:** Middleware to enable communication between Frontend (Port 5173) and Backend (Port 5000).

---

## 🚀 Features

### **User / Customer Module**
* **Product Catalog:** View sweets with images, prices, and names.
* **Smart Search:** Real-time filtering of sweets by name.
* **Category Filter:** Sort sweets by type (Milk, Dry Fruits, Bengali, etc.).
* **Shopping Cart:** Add items, adjust quantity, and view total bill.
* **Checkout:** Simulate order placement.

### **Admin Module**
* **Dashboard:** Secure view for shop owners.
* **Inventory Management:** Add new sweets with price and category.
* **Live Updates:** Changes in Admin panel reflect immediately on the Customer side.

---

## 📂 Folder Structure

```text
Sweet-Shop-Management-System/
│
├── backend/                # Node.js Server Code
│   ├── node_modules/
│   ├── server.js           # Main API Logic
│   ├── package.json        # Backend Dependencies
│
├── sweet-shop/             # React Frontend Code
│   ├── node_modules/
│   ├── public/             # Images folder (kaju.jpg, etc.)
│   ├── src/
│   │   ├── App.jsx         # Main Frontend Logic
│   │   ├── App.css         # Styling
│   │   └── main.jsx
│   ├── package.json        # Frontend Dependencies
│   └── vite.config.js
│
└── README.md               # Project Documentation