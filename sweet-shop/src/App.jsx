import React, { useState } from 'react';
import { ShoppingCart, Plus, Trash2, Search, UserCog } from 'lucide-react';
import './App.css';

// Initial Data with REAL VISIBLE IMAGES
// src/App.jsx (Partial Code - Replace the top part)

// ... imports remain the same

// Initial Data using LOCAL IMAGES (Reliable)
const initialSweets = [
  { 
    id: 1, 
    name: "Kaju Katli", 
    price: 800, 
    category: "Dry", 
    // This looks for kaju.jpg inside public/images/
    img: "/images/kaju.jpg" 
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
    img: "D:\Project\Sweet-Shop-Management-System\sweet-shop\src\images\gulab.jpg" 
  },
];

// ... rest of the App component remains exactly the same

export default function App() {
  const [products, setProducts] = useState(initialSweets);
  const [cart, setCart] = useState([]);
  const [view, setView] = useState('home'); // Options: 'home', 'cart', 'admin'
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  // --- CART FUNCTIONS ---
  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(cart.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.qty, 0);
  };

  // --- ADMIN FUNCTIONS ---
  const addProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const newSweet = {
      id: Date.now(),
      name: form.name.value,
      price: Number(form.price.value),
      category: form.category.value,
      // Used a generic image for newly added items
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Indian_Sweet.jpg/640px-Indian_Sweet.jpg"
    };
    setProducts([...products, newSweet]);
    alert("New Sweet Added Successfully!");
    form.reset();
  };

  // --- FILTER LOGIC ---
  const filteredProducts = products.filter(p => 
    (categoryFilter === 'All' || p.category === categoryFilter) &&
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      {/* HEADER */}
      <header>
        <div className="logo" onClick={() => setView('home')}>🍬 Mithai Wala</div>
        
        {view === 'home' && (
           <div className="search-bar">
             <Search size={18} />
             <input 
               type="text" 
               placeholder="Search sweets..." 
               onChange={(e) => setSearchTerm(e.target.value)}
             />
           </div>
        )}

        <div className="nav-actions">
          <button onClick={() => setView('admin')} className="icon-btn">
            <UserCog /> Admin
          </button>
          <button onClick={() => setView('cart')} className="icon-btn cart-btn">
            <ShoppingCart /> 
            {cart.length > 0 && <span className="badge">{cart.length}</span>}
          </button>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main>
        {view === 'home' && (
          <>
            <div className="filters">
              {['All', 'Milk', 'Dry', 'Bengali'].map(cat => (
                <button 
                  key={cat} 
                  className={categoryFilter === cat ? 'active' : ''} 
                  onClick={() => setCategoryFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="product-grid">
              {filteredProducts.map((sweet) => (
                <div key={sweet.id} className="card">
                  <img src={sweet.img} alt={sweet.name} />
                  <div className="card-info">
                    <h3>{sweet.name}</h3>
                    <p>₹{sweet.price} / kg</p>
                    <button onClick={() => addToCart(sweet)}>Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {view === 'cart' && (
          <div className="cart-page">
            <h2>Your Shopping Cart</h2>
            {cart.length === 0 ? <p>Cart is empty...</p> : (
              <div className="cart-list">
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <span>{item.name} (x{item.qty})</span>
                    <span>₹{item.price * item.qty}</span>
                    <button onClick={() => removeFromCart(item.id)} className="danger-btn">
                      <Trash2 size={16}/>
                    </button>
                  </div>
                ))}
                <div className="total-box">
                  <h3>Total Bill: ₹{calculateTotal()}</h3>
                  <button className="checkout-btn" onClick={() => { alert("Order Placed!"); setCart([]); setView('home'); }}>Checkout</button>
                </div>
              </div>
            )}
          </div>
        )}

        {view === 'admin' && (
          <div className="admin-page">
            <h2>Admin Dashboard</h2>
            <form onSubmit={addProduct} className="admin-form">
              <input name="name" placeholder="Sweet Name" required />
              <input name="price" type="number" placeholder="Price per Kg" required />
              <select name="category">
                <option value="Milk">Milk Sweet</option>
                <option value="Dry">Dry Fruit</option>
                <option value="Bengali">Bengali</option>
              </select>
              <button type="submit"><Plus size={16}/> Add Item</button>
            </form>

            <div className="admin-list">
              <h3>Current Inventory</h3>
              <ul>
                {products.map(p => <li key={p.id}>{p.name} - ₹{p.price}/kg</li>)}
              </ul>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}