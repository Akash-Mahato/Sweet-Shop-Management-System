// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Allow React to talk to this server
app.use(express.json()); // Allow reading JSON data

// --- MOCK DATABASE ---
// In a real project, this would be MongoDB.
// For now, we use this variable to store data while the server runs.
let sweets = [
  { 
    id: 1, 
    name: "Kaju Katli", 
    price: 800, 
    category: "Dry", 
    img: "/images/kaju.jpg" // Note: This matches your frontend local image path
  },
  { 
    id: 2, 
    name: "Rasgulla", 
    price: 300, 
    category: "Bengali", 
    img: "/images/rasgulla.jpg" 
  },
  { 
    id: 3, 
    name: "Mysore Pak", 
    price: 450, 
    category: "Milk", 
    img: "/images/mysore.jpg" 
  },
  { 
    id: 4, 
    name: "Gulab Jamun", 
    price: 350, 
    category: "Milk", 
    img: "/images/gulab.jpg" 
  },
];

let orders = [];

// --- API ROUTES ---

// 1. Get All Sweets (Used by Home Page)
app.get('/api/sweets', (req, res) => {
    res.json(sweets);
});

// 2. Add New Sweet (Used by Admin)
app.post('/api/sweets', (req, res) => {
    const newSweet = {
        id: Date.now(), // Generate a unique ID
        name: req.body.name,
        price: Number(req.body.price),
        category: req.body.category,
        img: "/images/kaju.jpg" // Default image for new items (Keep it simple)
    };
    sweets.push(newSweet);
    console.log("New Sweet Added:", newSweet.name);
    res.json(newSweet);
});

// 3. Place Order (Used by Cart)
app.post('/api/orders', (req, res) => {
    const order = req.body;
    orders.push(order);
    console.log("Order Received! Items:", order.cart.length, "Total:", order.total);
    res.json({ message: "Order Successful", orderId: Date.now() });
});

// Start the Server
app.listen(PORT, () => {
    console.log(`Backend Server running on http://localhost:5173`);
});